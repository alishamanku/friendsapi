import uvicorn
from fastapi import FastAPI
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse
import matplotlib

matplotlib.use('Agg')
import pandas as pd

app = FastAPI()
annotated_df = pd.read_csv("../annotated_data.csv")
full_df = pd.read_csv("../all_corpus_html.csv")
annotated_df["texts"] = annotated_df["texts"].apply(eval)


def get_season2episodes(data):
    result = {}
    for season, group in data.groupby("season"):
        result[season] = sorted(group["episode"].unique().tolist())
    return result


season2episodes = get_season2episodes(annotated_df)


def get_corpus(season, episode):
    result = full_df.query(f"season == {season} and episode == {episode}")
    return result["texts"].tolist()[0]


def get_annotated(season, episode):
    result = annotated_df.query(f"season == {season} and episode == {episode}")
    para_html = create_table(result)
    return para_html


def create_para(paras):
    p = []
    p.append("<div>")
    for person, para in paras:
        p.append(f'<p align="left"><font size="3"><b>{person}:</b>{para}</font></p>')
    p.append("</div>")
    return "".join(p)


def create_row(row):
    row_html = []
    row_html.append('<tr style="height:200px">')
    p_map = {
        -1: "negative",
        0: "neutral",
        1: "positive"
    }
    row_html.append(f'<td>{row["title"]}</td>')
    row_html.append(f'<td>{row["scene"]}</td>')
    row_html.append(f'<td>{create_para(row["texts"])}</td>')
    row_html.append(f'<td>{p_map[row["gold_standard"]]}</td>')
    row_html.append("</tr>")
    return "".join(row_html)


def create_table(df):
    tables = []
    tables.append("<table border-spacing: 20px><thead><tr>")
    for col in ["Episode", "Scene", "Conversation", "Polarity"]:
        tables.append(f"<th>{col}</th>")
    tables.append("</tr></thead>")
    tables.append("<tbody>")

    for _, row in df.iterrows():
        row_html = create_row(row)
        tables.append(row_html)
        tables.append("<br>")
    return "".join(tables)


@app.get("/pos")
def display_pos_table(result, season, episode, done=None):
    if not done == "on":
        return HTMLResponse('<br/><p style="text-align: center">please ensure you have selected the result type, '
                            'season (and episode).')
    if result == "corpus":
        return HTMLResponse(get_corpus(season, episode))
    elif result == "annotated":
        return HTMLResponse(get_annotated(season, episode))
    else:
        return HTMLResponse(f'<br><img src="season{season}.png" />')


@app.get("/get_episode")
def get_episode_by_season(season):
    season = int(season)
    episodes = season2episodes[season]
    return JSONResponse({"episodes": episodes})


@app.get("/")
def start():
    return FileResponse("monica_chandler.html")


@app.get("/{filename}")
def pass_file(filename):
    return FileResponse(filename)


if __name__ == "__main__":
    uvicorn.run("backend:app", host='localhost', port=9999, reload=True)
