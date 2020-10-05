# Covid19-Bot
An awesome Covid 19 bot which helps in predicting covid, provides the statistics of the covid situation at a national level  along with the capacity to answer faqs regarding the virus. 

# Demo 
<img src ="static/botLogo.jpg" width="500px" height = "500px">
 
# Getting started
## Please refer to this [document file](static/installation.docx) to install all the pre-requiste and set up the conda environment for rasa.

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





