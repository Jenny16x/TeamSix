# Segment 2

## Random Forest Analysis


### Rationale
In pitching, and baseball overall, there is an almost overwhelming variety of statistics to choose from. We wanted to focus only on key statistics to use as features in our machine learning model, so we needed a method of narrowing down which statistics would be best. We decided to employ a random forest analysis on our data and utilize the `feature_importances_` property to determine which pitcher features were more strongly correlated with pitcher salary.

### Cleaning Datasets

 Original datasets used in the random forest analysis:

 - `Pitching.csv` - pitcher statistics
 - `People.csv` - player information (i.e., height, weight, L/R handedness, etc.)
 - `Salaries.csv` - player salary data

![Pitching.csv dataframe](./images/pitchingCSV-example.png)

![People.csv dataframe](./images/peopleCSV-example.png)

![Salaries.csv dataframe](./images/salaryCSV-example.png)


*Cleaning Pitching Statistics Data*<br>
[Jupyter Notebook- Cleaning Pitching Data](./cleaning-pitching-data.ipynb)
<br>
First, the pitching data was filtered to include only the years 2010-2019. We chose to include more years in the random forest analysis to give the model more data to work with when ranking the feature importances. After filtering by year, all rows with null values were dropped from the dataframe. 

![Pitching DataFrame - Filtered to 2010-2019](./images/pitchingCSV-yrs_filtered.png)
<br>

Next, a new column combining the `playerID` and `yearID` was created. Since the pitching and salaries dataframes have multiple rows with the same playerID for different years, having a unique ID that combines the `playerID` and `yearID` would help to reduce issues with merging later. This final dataframe was exported as a csv for later use ([Cleaned Pitching Data](./csv-exports/2010-2019_pitching_clean.csv)).

![Pitching Dataframe- Final](./images/pitchingDF-final.png)


<br>

*Cleaning People Data*<br>
[Jupyter Notebook- Cleaning People Data](./cleaning-people-data.ipynb)
<br>
For this dataset, we only wanted to keep the columns for features that could potentially influence salary. The unnecessary columns were dropped, with the final dataframe including only `playerID`, `weight`, `height`, `bats`, and `throws`. This dataframe was exported as a csv for later use ([Cleaned People Data](./csv-exports/2010-2019_people_clean.csv))
<br>
![People Dataframe- Final](./images/peopleDF-final.png)

<br>

*Cleaning Salary Data*<br>
[Jupyter Notebook- Cleaning Salary Data](./cleaning-sal-data.ipynb)<br>
First, all rows with null values were dropped. Then the data was filtered to include only years 2010-2019. Lastly, the `yearID` and `playerID` columns were merged into a new column in the same manner as was done with the pitching data. The final dataframe was exported as a csv for later use ([Cleaned Salary Data](./csv-exports/2010-2019_salaries_clean.csv)) <br>
![Salaries Dataframe- Final](./images/salaryDF-final.png)<br>


<br>

### Merging Datasets
[Jupyter Notebook- Merging Data](./merging-data.ipynb)<br>
First, the pitching and people dataframes were read in and merged on `playerID` using a left join. 
![Merging Pitching Data with People Data](./images/merge_pitch-ppl.png)<br>

Since the `playerID` would no longer be needed at this point, it was dropped along with the `yearID` column.<br>

Next, the salaries dataframe was read in. Since all we needed to merge was the `ID` column and `salary` column, all other columns were dropped from the dataframe. The salaries dataframe was then merged with the combined pitching/people dataframe, again using a left join. All rows with null values were dropped, resulting in the final dataset to be used in the random forest analysis. The dataframe was exported as a csv for later use ([Final Merged Dataset](./csv-exports/2010-2019_data.csv))
![Final Merged Dataset](./images/merged-final.png)<br>

### Encoding 
[Jupyter Notebook- Encoding Data](./encoding-data.ipynb)<br>
Since there were a few features (`teamID`, `lgID`, `throws`, and `bats`) that had string values, they needed to be encoded as numerical values to be included in the random forest analysis. To accomplish this `LabelEncoder` was utilized and a new encoded dataframe was created and exported as a csv ([Encoded Data](./csv-exports/encoded_data.csv))

### Binning
[Jupyter Notebook- Binning Salary Data](./binning-data.ipynb)<br>
An additional dataframe/csv was created with an additional `salary-bin` column, classifying each salary as either low, mid, or high. This would be used in addition to the unbinned dataset to see which worked better for the random forest analysis ([Binned Encoded Data](./csv-exports/encoded_data_binned.csv)).

### Random Forest Analysis - Unbinned Data
[Jupyter Notebook- RF Analysis Unbinned](./RF-redo-unbinned.ipynb)<br>
The encoded-unbinned dataset was read in. The features (statistics) and target (salary) variables were defined. Training and Test sets were split using `train_test_split`. 
<br>
The data was then scaled using `StandardScaler()`, and the random forest model was created using `RandomForestClassifier()`.
<br>
The model was then fit, and predictions were made using the testing data. Next, the feature importances were determined, and sorted by their rank. 
![Feature Importance Ranking - Unbinned](./images/feature-importances_unbinned.png)<br>

Additionally, an accuracy score was run to determine the random forest model's accuracy in predicting salary from the provided features. The accuracy score was very low at just 1.67%. This would be used for comparison against the random forest analysis on binned data to see which performs better. ![Accuracy Score- Unbinned RF Analysis](./images/unbinned-acc_score.png) 

### Random Forest Analysis - Binned Data
[Jupyter Notebook- RF Analysis Binned](./RF-redo-binned.ipynb)<br>
For this analysis, the exact same methods were employed as with the previous random forest analysis, only this time the salary bins were used as the target variable instead of the actual salary. This time around, the feature importances ranking appeared more consistent with what we would expect. 
![Feature Importances - Binned](./images/feature-importances_binned.png)<br>

Additionally, the accuracy score for this analysis was significantly higher at 52.5% versus the very low accuracy found with the analysis on the unbinned data. ![Accuracy Score- Binned RF Analysis](./images/binned-acc_score.png)<br>

Since the random forest analysis on the binned data performed much better, we decided to use this feature importance ranking as the basis for our feature selection as we move forward with developing our machine learning model.
<br>
The feature importances ranking was used to create a dataframe which would include the features, their definitions (pulled from [here](https://rdrr.io/cran/Lahman/man/Pitching.html)), and the feature importance percentage.
![Feature Importances Dataframe](./images/feature-importances_df.png)

<br><br>
---
---
---
# \\\ OLD WORK //

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
Here I read in the `2016-2019_pitcher_stats.csv` file as a dataframe to merge with the Lahman `Salaries.csv` file in a different way- this time doing a left merge on multiple columns (`playerID`, `yearID`, `teamID`, and `lgID`). However, I later realized that this method reduced the dataset down to 416 rows which affected the downstream random forest analyses I performed.
<br><br>
I then merged the demographics dataframe with the pitcher & salary dataframe, creating the 'full' dataframe (`full_df`). I exported this dataframe as a csv titled `pitcher_stat_sal_dem.csv`.
<br><br>

## Encoding Object Features
After creating the `pitcher_stat_sal_dem.csv` file, I decided to encode the features that were classified as object datatypes as numerical in preparation for the random forest analysis. 
<br><br>
I used the `LabelEncoder` method from scikit-learn to encode the `teamID`, `lgID`, and `throws` features into numerical values. After viewing the new dataframe to ensure features were properly encoded, I exported the new dataframe as a csv `encoded_pitcher_stat_sal_dem.csv`. This would be the dataset used in my first random forest analyses.
<br>
<br>

## Random Forest Analysis, pt. 1
---
I loaded in the `encoded_pitcher_stat_sal_dem.csv` file to use for the first random forest analysis. 
<br><br>
To create the features, I utilized a for loop to include all columns that were not `salary` or `playerID` as our `X` variable, and the `salary` column as our target `y` variable. 
<br><br>
The training and testing sets were split using `train_test_split`.
<br><br>
The data was scaled using `StandardScaler`, then fit and transformed. 
<br><br>
The initial random forest model was created using `RandomForestClassifier` with the `n_estimators=128` and `random_state=1`. 
<br><br>
The model was then fit, and predictions were made. After making predictions, I ran the `accuracy_score` which returned a value of approximately 1.92%, which was extremely weak. 
<br><br>
I then used the `feature_importances_` method and sorted them to display the ranking of each features' importance in determining salary. The values for each feature were also extremely low, with the highest ranking feature, `ERA`, producing a value of approximately 5.24%. 
<br><br>
Due to the extremely weak values produced by this first random forest analysis, I decided that I would need to alter some aspects of the data cleaning and model development to produce better results. 

## Random Forest Analysis, pt. 2
---
One method I attempted to use in order to improve the feature ranking of the random forest analysis was to bin the salaries into `low`, `mid`, and `high` classes. 
<br><br>
To create the bins, I utilized pandas `.qcut()` method to create the 3 



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