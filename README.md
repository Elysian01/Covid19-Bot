# Covid19-Bot
An awesome A.I based Covid 19 bot which helps in predicting covid in a person, provides the statistics of the covid situation at a national level and state level along with the capacity to answer faqs regarding the virus.

# Demo 
<img src ="static/demo.gif" width="360px" height = "640px">

# Getting started
## Please refer to this [document file](https://docs.google.com/document/d/12m7BJXUrSxJcMBTmk9V3AMghKKBDMez7er5q5KejNtg/edit?usp=sharing) to install all the pre-requiste and set up the conda environment for rasa.

# To run the application
To directly run the application open three shell side by side and activate the environment in each of them.
```bash
conda activate rasa
```

Then run following each command in each shell

```bash
python server.py
```
```bash
rasa run actions
```
```bash
rasa run -m models --enable-api
```

### Open your browser go to 'http://127.0.0.1:5000/' and enjoy the experience





