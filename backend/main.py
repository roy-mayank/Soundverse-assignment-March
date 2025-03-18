from fastapi import FastAPI
from typing import List

app = FastAPI()

@app.get("/")
def read_dna():
    all_artists_data = [
        {
            "Artist": "ASH POURNOURI",
            "Description": "Music entrepreneur shaping EDM, pop, and artist careers",
            "Genres": ["EDM", "House", "Dance Pop"],
        },
        {
            "Artist": "AVICII",
            "Description": "Iconic DJ blending melodic house anthems",
            "Genres": [],
        },
        {
            "Artist": "COLDPLAY",
            "Description": "Legendary rock band known for electronics",
            "Genres": ["Pop Rock", "Alt Rock", "Atmostpheric Rock"],
        },
        {
            "Artist": "IMAGINE DRAGONS",
            "Description": "Energetic rock band managing rock with electronics",
            "Genres": ["Alt Rock", "Electronic", "Anthemic Sound"],
        },
        {
            "Artist": "Skrillex",
            "Description": "Pioneer of modern bass music blending dubstep, EDM, and genre-defying sounds",
            "Genres": ["Dubstep", "Bass Music", "Electronic Fusion"],
        },
        {
            "Artist": "SWEDISH HOUSE MAFIA",
            "Description": "EDM supergroup known for anthemic festival hits and progressive house",
            "Genres": ["EDM", "House", "Festival Anthems"],
        },
        {
            "Artist": "THE WEEKND",
            "Description": "Global icon blending R&B, pop, and dark themes",
            "Genres": ["Alt-R&B", "Synth Pop", "DarkWave"],
        },
        {
            "Artist": "MEMBA",
            "Description": "Genre-bending duo creating tribal rhythms and cinematic textures",
            "Genres": ["Tribal","EDM","Experimental Bass"],
        },
        {
            "Artist": "GALANTIS",
            "Description": "Duo fusing pop melodies with uplifting electronic beats",
            "Genres": ["Pop EDM", "Uplifting", "Future Bass"],
        },
        {
            "Artist": "Zara Larsson",
            "Description": "Pop powerhouse delivering chart-topping hits with electronic flair",
            "Genres": ["Pop", "Dance","ElectroPop"],
        }
    ]
    return all_artists_data