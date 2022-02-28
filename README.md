# Predicting Pitcher Salaries

## Table of Contents
- [Overview](https://github.com/Jenny16x/TeamSix#project-overview)
- [Data Preprocessing](https://github.com/Jenny16x/TeamSix#data-preprocessing)
- [Machine Learning Model](https://github.com/Jenny16x/TeamSix#the-machine-learning-model)
    - [Exploratory Analysis](https://github.com/Jenny16x/TeamSix#exploratory-analysis)
    - [Random Forest Analysis](https://github.com/Jenny16x/TeamSix#random-forest-analysis)
    - [Neural Network Model](https://github.com/Jenny16x/TeamSix#neural-network-model)
    - [Boosted Random Forest Analysis](https://github.com/Jenny16x/TeamSix#boosted-random-forest-analysis)
    - [Polynomial Regression Analysis](https://github.com/Jenny16x/TeamSix#polynomial-regression-analysis)
- [Database](https://github.com/Jenny16x/TeamSix#database)
- [Presentation](https://github.com/Jenny16x/TeamSix#presentation---google-slides)
- [Dashboard](https://github.com/Jenny16x/TeamSix#dashboard)
- [Communication Protocol](https://github.com/Jenny16x/TeamSix#communication-protocol)


## Project Overview

### Topic
For this project, we will be creating a supervised machine learning model to take in MLB pitcher statistics to predict their expected salaries in the future.
<br>

### Reasoning
We selected this topic because an abundance of baseball statistics data is readily available online, and predicting pitcher salaries seemed like an interesting yet feasible challenge for machine learning.
<br>

### Data Sources
We will be using MLB pitching statistics and salary data for years 2016-2019 to train our model. We chose to use multiple years of data to imporove our model's accuracy. We chose not to include more recent years (2020 & 2021) because of the signinficant impact the COVID-19 pandemic had on professional sports. 

We sourced our pitching statistics and player salary data from [Lahman's Baseball Database.](http://www.seanlahman.com/baseball-archive/statistics/)
<br>


## What We Plan to Answer with Data
We hope to be able to find pitcher metrics that are strongly correlated with salary in order to predict what a pitcher's salary is expected to be in the future.

<br>

# Data Preprocessing
To better analyze the pitcher salary data, we needed to first combine and clean the data files we had. In order to attain all of the neccessary information for the analysis, we used three seperate CSV files - 1) Salaries 2) People & 3) Pitchers. The `Salaries.csv` file contained salary data for all players in the league, while the `Peoples.csv` containted their names and personal information, and the `Pitchers.csv` file contained stats for the pitchers. 

The first step in cleaning the data was combining the `Salaries.csv` and `Pitcher.csv` by merging the dataframes on the `Player ID` by using PANDAS. The next step was to filter by the years we wanted. For this analysis, we decided to use years 1990 - 2019, approzimately 30 years of data. This ensured that we would have enough quality data point. Next, the data was further filtered by the number of games started. To eliminate outliers and filter by only starting pitchers, we required a minimum of at least 3 games started. This essentially filtered out any closing pitchers or players who may have been called up briefly from the minor leagues. 

Next, the data had to be cleaned after being filtered. The first step in this process was to filter out any null values in the Salary column since these data points would be of no help. After this, a handful of columns were dropped because the stats they provided were either empty values or simply not relevant for this analysis. 

After this, the dataframe was combined with the `Players.csv` containing personal information. The purpose of linking the file was primarily to get the player names linked as well as some other stat such as height, weight, etc. The files were merged on the `Player ID` using PANDAS. Once the names were linked, the data was further cleaned by changing the column acronyms to their full names for readability. Unfortuantely, player age was not provided but we felt like this was an important data point to have. To attain the player age, we created a new column by subtracting the `Year` column from the `Year Born`. This effectively gave us the player age for each data point. 

With the dataframe effectively filtered and cleaned, the final steps were to organize the columns in a way that made sense and export the file as [`pitcher_salaries_cleaned.csv`](./data-cleaning/pitcher_salaries_cleaned.csv).

# The Machine Learning Model

## Exploratory Analysis
Our first exploratory analysis looking at salaries vs ERA can be found [here](./Segment-1/Segment_1_ML_Model.ipynb).
<br>
To determine the initial machine learning model, we analyzed a dataset from 2010-2016 that had baseball salary and ERA statistics.  This is only an example dataset and the final will be for the years 2016-2019.  In the initial scatter plot below, we observed as the ERA decreased, the salary increased, but there were some outliers.  

<br>![Scatter1](https://user-images.githubusercontent.com/90434559/152698416-0c15916f-dac5-4df8-b14e-93984f212fbb.png)

After removing the outliers, the scatterplot below showed the same ERA/Salary relationship, but in a bit more detail.
<br>![Scatter2](https://user-images.githubusercontent.com/90434559/152698454-d6965103-6256-4cd9-8537-8c6c7b2fb4a8.png)

As a result of the scatterplots, the inital machine learning model chosen was linear regression.  The linear regression line was fit based on the initial data and produced the following model with a training and testing score of .97.

<br>![Scatter3](https://user-images.githubusercontent.com/90434559/152698530-19d303e3-d4d3-4d0c-ab86-efdec46c7529.png)

As we develop the dataset, our machine learning model will evolve and employ unsupervised learning to find additional relationships to salary.  From the original dataset, there are ERA values of 0, so additional variables will need to be taken into consideration when predicting salary.  

## Random Forest Analysis
To help narrow down which features to focus on for our machine learning model, we employed a random forest analysis to obtain a ranking of the various features' importances (see below).
<br>![Random Forest Analysis Results](./random-forest-analysis/images/feature-importances_df.png)
<br>
The details of the analysis (data preprocessing, random forest analysis, results, etc.) can be found [here](./random-forest-analysis/README_random-forest.md).

## Neural Network Model
Since neural networks are effective at modeling complex and/or non-linear relationships, we attempted to create a neural network model for our salary-prediction project. We initially started by using a regression model on select features, which produced a highly ineffective model with extremely high loss and MSE.<br>
![NN1 Model- Loss Plot](https://raw.githubusercontent.com/Jenny16x/TeamSix/alyssa/neural-network/images/NN1-loss.png)
![NN1 Model- MSE Plot](https://raw.githubusercontent.com/Jenny16x/TeamSix/alyssa/neural-network/images/NN1-MSE.png)<br>

To improve the model, we decided to peform a log-transformation on the `Salary` column in order to standardize the salaries in an attempt to help the model work better. We predicted that the wide variation/distribution in salaries for MLB pitchers may have contributed to the initial neural network's poor performance.<br>

Using a log-10 transformation *did* improve the metrics for the neural network model significantly, however the loss and MSE were still very high- too high to be considered an accurate model.<br>
![NN2 Model- Loss Plot](https://raw.githubusercontent.com/Jenny16x/TeamSix/alyssa/neural-network/images/NN2-loss.png)
![NN2 Model- MSE Plot](https://raw.githubusercontent.com/Jenny16x/TeamSix/alyssa/neural-network/images/NN2-MSE.png)<br>

Due to the poor performance of the neural network model with our dataset, we determined that a neural network model was not well-suited for the purpose of our project.


## Boosted Random Forest Analysis

## Polynomial Regression Analysis

# Database
## Database Schema
![Database Schema](https://raw.githubusercontent.com/Jenny16x/TeamSix/Jason/Pitcher_Salaries_ERD.png)

# Presentation - Google Slides
https://docs.google.com/presentation/d/122tb9H_bUzxNxB_guh8NMsYfO0LZ8E77e_JLKwIQAJ4/edit#slide=id.p

<br>

# Dashboard
We are currently utilizing Tableau to create our dashboard (Link to [Dashboard](https://public.tableau.com/app/profile/dan.jones7483/viz/MoneyBall2_0/AvgSalaryHeight)).

<br><br>
We are also exploring connecting our database to an interactive webpage for our dashboard.
![Webpage](./images/webpage_screenshot.png)
<br>Some details about how we are planning to create this page can be found [here](https://github.com/Jenny16x/TeamSix/blob/jenny/Jennys_README.md#the-original-structure-vs-teamsix-modified-structure).



