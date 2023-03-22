import uvicorn
from fastapi import FastAPI
from fastapi.responses import FileResponse, HTMLResponse
from random import random

import nltk
import pandas as pd
import numpy as np
import altair as alt


app = FastAPI()


# Graph
gold_annotation_df = pd.read_csv("../Milestone_4/Monica_Chandler_Gold_Annotation.csv")  #TODOs: check if this file is accessible from other people's laptops

# Get graphs for each season
def season_sentiment(df, num):
    '''Input dataframe should only be gold_annotation_df, the number indicates the specific season.
       This function will return the graph of the relationship change in the specified season.'''
    if num > 0 and num < 11:
        if num == 1:
            season_episodes = df['episode'][:17].tolist()
            season = df[:17]
        elif num == 2:
            season_episodes = df['episode'][17:35].tolist()
            season = df[17:35]
        elif num == 3:
            season_episodes = df['episode'][35:70].tolist()
            season = df[35:70]
        elif num == 4:
            season_episodes = df['episode'][70:163].tolist()
            season = df[70:163]
        elif num == 5:
            season_episodes = df['episode'][163:349].tolist()
            season = df[163:349]
        elif num == 6:
            season_episodes = df['episode'][349:510].tolist()
            season = df[349:510]
        elif num == 7:
            season_episodes = df['episode'][510:689].tolist()
            season = df[510:689]
        elif num == 8:
            season_episodes = df['episode'][690:800].tolist()
            season = df[690:800]
        elif num == 9:
            season_episodes = df['episode'][800:953].tolist()
            season = df[800:953]
        else:
            season_episodes = df['episode'][953:].tolist()
            season = df[953:]
    
        graph = alt.Chart(season).mark_line().encode(
            x=alt.X('episode', sort=season_episodes),
            y=alt.Y('sum(gold_standard)'))
    else:
        print("Season number out of range.")
    return graph

# Save graphs in PNG format
def save_graph(graph):
    graph.save('graph.png')


@app.get("/pos")
def display_result(result, season, episode):   # we use result instead of output since our frontend call this result
    print("here!")
    if result == "Full Corpus Conversation":
        return HTMLResponse(put_in_table(get_POS_distribution(genre)))  # TODOs: write our put_in_table/get_POS_distribution functions
    elif result == "Annotated Conversation":
        return HTMLResponse(put_in_table(get_POS_distribution(genre)))  # TODOs: write our put_in_table/get_POS_distribution functions
    elif result == "Graph":
        save_graph(season_sentiment(gold_annotation_df, season))
        return HTMLResponse(f'<img src="pos.png?t={random()}" />')

@app.get("/{filename}")
def pass_file(filename):
    return FileResponse(filename)

@app.get("/")
def start():
    return FileResponse("monica_chandler.html")


if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=9999, debug=True)