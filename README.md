# World Color Survey

![alt text](https://github.com/6859-sp21/final-project-skyblazers/blob/main/images/munsell_chips.png)

[330 Munsell chips](https://www.researchgate.net/figure/The-330-Munsell-chips-used-as-materials-in-most-color-naming-studies_fig1_327204381) are frequently used in color-naming studies. Our analysis was inspired by the [World Color Survey (WCS)](http://www1.icsi.berkeley.edu/wcs/), initiated in the late 1970s to test a hypothesis on cross-language color naming. The interviewers of the study collected color-naming data from an average of 24 speakers of each of 110 unwritten languages globally.

## Description

We created a fun and interactive way for you to explore how colors are represented around the world! Click [HERE](https://6859-sp21.github.io/final-project-skyblazers/) to see our visuals! 

Here is a list of links to our:
1. [Video Teaser](https://drive.google.com/file/d/13DZAPFANdUmeY6h7PiHlcA2FpUloDjQJ/view?usp=sharing)
2. [Paper](https://github.com/6859-sp21/final-project-skyblazers/tree/main/final)
3. [Project Page](https://6859-sp21.github.io/final-project-skyblazers/)

## Installation

Start by cloning the directory into your local machine and navigate to the folder on your terminal. Then run the following command:

```
username@machine final-project-skyblazers % python -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
...
```

Open http://0.0.0.0:8000/ in your browser to see the dashboard or alternatively, visit the deployed version at https://6859-sp21.github.io/final-project-skyblazers/.

## Development Process

Our team took key learnings from the A4 journey to make this final project a success. One of the critial learnings was to not be afraid of change - if something's not working after a while, scratch it and take another direction. Initially, we explored Kaggle to find the right dataset that had location data, which was a key criteria for us. We wanted to gain some D3 experience with geographic data and thus, we focused on supply chain datasets. We found an airlines dataset and spent several hours cleaning the data in R Studio. The dataset was 13 GB total and despite our clean up, it was very difficult to load the data onto our front-end. After multiple tries, we immediately scratched the plan and switched over to the WCS dataset with ease. We knew such a switch was necessary to make progress. 

Another key learning from A4 was to divide and conquer. From the get-go, we took this approach and focused on breadth. We each tackled a separate section in the dashboard, rather than all working on a single graph. We set up recurrent one hour or two hour working sessions daily, where we all hopped onto Zoom and worked on our parts individually. If we had any quick questions, it was very easy to share screen and get help. This technique was key to finishing our MVP and final deliverables.

### Dividing Up Work

We decided to split up the development work in the following manner:

- Christina: Munsell color palette, word cloud, project page
- Elizabeth: Tree map, data cleansing, video teaser
- Sravani: UI design, Choropleth map, write ups

Although we took ownership of those sections, there was lots of overlap because we all helped each other resolve errors along the way. After many working sessions and iterations, we got the dashboard to be fully functional! Over the past few weeks, we collectively spent around 100 hours. Although we had some D3 experience and front-end development experience from A4, our team is still at a beginner level and required more time to complete these interactive assignments. We had a significant learning curve in the class, but it was all worth it!

## Authors and acknowledgment

This interactive dashboard is created by LGO 22s Elizabeth Hau, Christina Michaels, and Sravani Yajamanam Kidambi. We'd like to thank our instructor and TAs for supporting us the entire semester in creating such interactive visualizations! 

## References

- [Dataset](https://www.kaggle.com/jboysen/color-survey?select=dict.txt)
- [Font](https://www.cufonfonts.com/font/twentieth-century)
- [Logo](https://www.jing.fm/iclipt/xbioo/)
- [Treemap](http://bl.ocks.org/guglielmo/16d880a6615da7f502116220cb551498)
- [Choropleth Map](https://www.d3-graph-gallery.com/graph/choropleth_hover_effect.html)
- [World Map Tooltip](https://blockbuilder.org/abrahamdu/50147e692857054c2bf88c443946e8a5)
