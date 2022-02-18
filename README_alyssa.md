# Segment 2
---
## playing-w-data.ipynb
### Pitching Statistics Data
For this section, I read in the pitching data from the Lahman Database as a dataframe. I then used the `.dtypes` method to check the datatype of each column. I mostly wanted to check the datatype of the `yearID` column so I could determine how to filter the years. 
<br><br>
From there, I created a new dataframe with the data filtered to only include years 2016-2019. I then created a new csv file with this data using the `to_csv()` method, saving this new file as `2016-2019_pitcher_stats_csv`.
<br><br>
### Read & Merge Pitching Data with Salaries Data
Next, I read in the Lahman Salaries data as a new dataframe. I once again filtered the years, then merged this new salaries dataframe with my previously created pitching datafame. I did this using a left join on `playerID`. Since this created duplicate columns, I dropped the duplicate columns and exported this dataframe as a csv titled `2016-2019_pitcher_stats_n_sal.csv`.
<br><br>
### Find Unique Player IDs
Next, I wanted to get a list of all the unique player IDs so that I could create a table of all the pitchers included in our dataset joined with the player demographics info found in the Lahman `People.csv` file. 
<br><br>
Using the pitching stats dataframe, I used the code `df.playerID.unique()` and saved it as `unique_IDs` to return all the unique playerIDs found in the dataframe. Using `len()` I could see that there were 1365 pitchers included in the original pitching stats dataframe. I then created a new dataframe using `unique_df=pd.DataFrame(unique_IDs,columns=['playerID'])` so I would have a dataframe of just the unique player IDs.
<br><br>
### Merge Unique IDs with People.csv
The next step was to merge the unique player ID dataframe with the Lahman `People.csv` file using a left join on `playerID`. This gave me a new dataframe containing the demographic information for each of the 1365 pitchers in our dataset.
<br><br>
After creating the demographics dataframe, I wanted to further clean it up to only include demographic information that may be relevant to determination of salary. So I used `df.drop()` to remove all unneccessary columms from the dataframe. Once I had cleaned the dataframe I exported it as a csv `pitch-demographics.csv`. 

## cleaning-and-merging-data.ipynb








<br><br><br>
# Segement 1
---


# Predicting Pitcher Salaries
## Topic
For this project, we will be creating a supervised machine learning model to take in MLB pitcher statistics to predict their expected salaries in the future.

## Reasoning
We selected this topic because ______.

## Data Sources
We will be using MLB pitching statistics and salary data for years 2016-2019 to train our model. We chose to use multiple years of data to imporove our model's accuracy. We chose not to include more recent years (2020 & 2021) because of the signinficant impact the COVID-19 pandemic had on professional sports. 

We sourced our pitching data from _______ and our salary data from _____ ***(insert links to sources)***

## What We Plan to Answer with Data
We hope to be able to find pitcher metrics that are strongly correlated with salary in order to predict what a pitcher's salary is expected to be in the future.

<br>

# Communication Protocol
Our team will communicate during class sessions and through our own project group Slack channel. Additionally, we will be meeting once a week outside of class to discuss progress, help each other, and ensure all segment deliverables are ready for submission by Sunday evening.


<br>

# The Machine Learning Model
*insert brief description of model*