# Predicting Pitcher Salaries

# The Machine Learning Model
## Model 1 Linear Regression
To determine the initial machine learning model, we analyzed a dataset from 2010-2016 that had baseball salary and ERA statistics.  This is only an example dataset and the final will be for the years 2016-2019.  In the initial scatter plot below, we observed as the ERA decreased, the salary increased, but there were some outliers.  

![Scatter1](https://user-images.githubusercontent.com/90434559/152698416-0c15916f-dac5-4df8-b14e-93984f212fbb.png)

After removing the outliers, the scatterplot below showed the same ERA/Salary relationship, but in a bit more detail.
![Scatter2](https://user-images.githubusercontent.com/90434559/152698454-d6965103-6256-4cd9-8537-8c6c7b2fb4a8.png)

As a result of the scatterplots, the inital machine learning model chosen was linear regression.  The linear regression line was fit based on the initial data and produced the following model with a training and testing score of .97.

![Scatter3](https://user-images.githubusercontent.com/90434559/152698530-19d303e3-d4d3-4d0c-ab86-efdec46c7529.png)

As we develop the dataset, our machine learning model will evolve and employ unsupervised learning to find additional relationships to salary.  From the original dataset, there are ERA values of 0, so additional variables will need to be taken into consideration when predicting salary.  


## Final Model Linear Regression
After exploring several models and features, it was decided to go back to the initial model using ERA and Salary.  However, based on what we learned throughout the process, there were a couple of updates from Model 1:
  1. The dataset now included baseball statistics from 1990-2016
  2. Only pitchers who played 7 innings were included
  3. The natural log of the salaries were used instead of the actual salaries

Based on the changes of the dataset and using the natural log for salaries, the following results were achieved: 
 

![Scatter1](https://user-images.githubusercontent.com/90434559/152698416-0c15916f-dac5-4df8-b14e-93984f212fbb.png)

After removing the outliers, the scatterplot below showed the same ERA/Salary relationship, but in a bit more detail.
![Scatter2](https://user-images.githubusercontent.com/90434559/152698454-d6965103-6256-4cd9-8537-8c6c7b2fb4a8.png)

As a result of the scatterplots, the inital machine learning model chosen was linear regression.  The linear regression line was fit based on the initial data and produced the following model with a training and testing score of .97.

![Scatter3](https://user-images.githubusercontent.com/90434559/152698530-19d303e3-d4d3-4d0c-ab86-efdec46c7529.png)

As we develop the dataset, our machine learning model will evolve and employ unsupervised learning to find additional relationships to salary.  From the original dataset, there are ERA values of 0, so additional variables will need to be taken into consideration when predicting salary.  

<br>

