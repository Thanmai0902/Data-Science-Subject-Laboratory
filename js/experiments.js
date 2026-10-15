const GITHUB_REPO_URL = "https://github.com/Thanmai0902/pandas_data_formats";

const initialExperiments = [
    {
        id: 1,
        experiment_number: "EXPERIMENT 01",
        title: "Data Visualization with Matplotlib & Seaborn (Online Iris Dataset)",
        short_description: "Load an online dataset with Pandas and create Line, Scatter, Histogram, Box, and Pair plots using Matplotlib and Seaborn.",
        tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        subject_code: "22DS102006",
        aim: "To perform data visualization using Matplotlib and Seaborn by loading an online dataset, processing the data, and representing it using different types of plots such as line plot, bar plot, histogram, and scatter plot.",
        objective: "Understand how to load remote CSV datasets, compute summary statistics, and represent multivariate distributions using Matplotlib and Seaborn.",
        theory: "Data visualization is the graphical representation of information and data. By utilizing visual elements like charts, scatter plots, and distribution histograms, data scientists can easily uncover trends, outliers, and statistical distributions.",
        requirements: "Python 3.x, Pandas, Matplotlib, Seaborn, Jupyter Notebook / Google Colab / Python IDE",
        dataset: "Online Iris CSV Dataset (https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv)",
        syntax: "pd.read_csv('URL')\nplt.plot(x, y)\nsns.scatterplot(data=df, x='column1', y='column2')\nsns.histplot(data=df, x='column', kde=True)\nsns.boxplot(data=df, x='category', y='value')",
        procedure: "1. Import pandas, matplotlib.pyplot, and seaborn.\n2. Ingest online Iris dataset directly using pd.read_csv().\n3. Inspect data dimensions using df.head(), df.info(), and df.describe().\n4. Construct Matplotlib line plot for Sepal and Petal Length.\n5. Generate Seaborn scatter plot mapping species to hue.\n6. Plot Seaborn histogram with Kernel Density Estimation (KDE).\n7. Render Seaborn categorical box plot comparing species.\n8. Generate full multivariate pairplot.",
        python_code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load online dataset
url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
df = pd.read_csv(url)

# Display first five records
print("First Five Records:")
print(df.head())

# Display dataset information
print("\\nDataset Information:")
print(df.info())

# Display statistical summary
print("\\nStatistical Summary:")
print(df.describe())

# 1. Matplotlib - Line Plot
plt.figure(figsize=(8, 5))
plt.plot(df.index, df["sepal_length"], label="Sepal Length")
plt.plot(df.index, df["petal_length"], label="Petal Length")
plt.xlabel("Sample Index")
plt.ylabel("Length")
plt.title("Sepal Length and Petal Length")
plt.legend()
plt.grid()
plt.show()

# 2. Seaborn - Scatter Plot
plt.figure(figsize=(8, 5))
sns.scatterplot(
    data=df,
    x="sepal_length",
    y="petal_length",
    hue="species"
)
plt.title("Sepal Length vs Petal Length")
plt.xlabel("Sepal Length")
plt.ylabel("Petal Length")
plt.show()

# 3. Seaborn - Histogram
plt.figure(figsize=(8, 5))
sns.histplot(
    data=df,
    x="sepal_length",
    hue="species",
    kde=True
)
plt.title("Distribution of Sepal Length")
plt.xlabel("Sepal Length")
plt.ylabel("Frequency")
plt.show()

# 4. Seaborn - Box Plot
plt.figure(figsize=(8, 5))
sns.boxplot(
    data=df,
    x="species",
    y="petal_length"
)
plt.title("Petal Length by Species")
plt.xlabel("Species")
plt.ylabel("Petal Length")
plt.show()

# 5. Seaborn - Pair Plot
sns.pairplot(
    df,
    hue="species"
)
plt.show()`,
        expected_output: "First Five Records:\n   sepal_length  sepal_width  petal_length  petal_width species\n0           5.1          3.5           1.4          0.2  setosa\n1           4.9          3.0           1.4          0.2  setosa\n2           4.7          3.2           1.3          0.2  setosa\n3           4.6          3.1           1.5          0.2  setosa\n4           5.0          3.6           1.4          0.2  setosa\n\nStatistical Summary:\n       sepal_length  sepal_width  petal_length  petal_width\ncount    150.000000   150.000000    150.000000   150.000000\nmean       5.843333     3.057333      3.758000     1.199333\nstd        0.828066     0.435866      1.765298     0.762238\nmin        4.300000     2.000000      1.000000     0.100000\nmax        7.900000     4.400000      6.900000     2.500000",
        result: "The online Iris dataset was successfully loaded and processed using Pandas. Different data visualizations were successfully created using Matplotlib and Seaborn to understand distributions, relationships, and differences among the dataset variables.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 2,
        experiment_number: "EXPERIMENT 02",
        title: "Line Plot with Subplots, Custom Ticks, Annotations & Image Export",
        short_description: "Create dual subplots in Matplotlib with customized tick labels, arrow annotations, and save high-resolution figure.",
        tools: ["Python", "Matplotlib"],
        subject_code: "22DS102006",
        aim: "To create a line plot using Matplotlib by setting the title, axis labels, ticks, tick labels, and annotations on subplots, and save the generated plot to an image file.",
        objective: "Master subplots architecture, customized axis ticks, arrow annotations, and high-DPI figure exporting in Matplotlib.",
        theory: "Subplots allow multiple visual perspectives to be arranged side-by-side or stacked vertically. Annotations allow domain scientists to emphasize inflection points, maxima, or anomalies using arrows and custom text callouts.",
        requirements: "Python 3.x, Matplotlib",
        dataset: "Monthly sales and expenses trend data.",
        syntax: "fig, ax = plt.subplots(2, 1)\nax[0].plot(x, y)\nax[0].set_xticks(range(len(labels)))\nax[0].set_xticklabels(labels)\nax[0].annotate('Text', xy=(x,y), xytext=(x1,y1), arrowprops=dict(arrowstyle='->'))\nplt.savefig('filename.png', dpi=300, bbox_inches='tight')",
        procedure: "1. Define month labels and sales/expenses numerical values.\n2. Initialize 2x1 subplots using fig, ax = plt.subplots(2, 1, figsize=(10, 8)).\n3. Plot monthly sales on the first subplot with circular markers and custom tick labels.\n4. Add arrow annotation targeting highest sales point.\n5. Plot monthly expenses on the second subplot with square markers and custom tick labels.\n6. Add arrow annotation targeting highest expense point.\n7. Apply suptitle and tight_layout().\n8. Export the plot as a 300 DPI image file 'monthly_sales_expenses.png'.",
        python_code: `import matplotlib.pyplot as plt

# Data
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales = [120, 150, 180, 160, 220, 250]
expenses = [80, 100, 120, 110, 140, 160]

# Create subplots
fig, ax = plt.subplots(2, 1, figsize=(10, 8))

# Subplot 1: Sales
ax[0].plot(months, sales, marker="o", linewidth=2, label="Sales")
ax[0].set_title("Monthly Sales")
ax[0].set_xlabel("Month")
ax[0].set_ylabel("Sales")
ax[0].set_xticks(range(len(months)))
ax[0].set_xticklabels(months)
ax[0].annotate("Highest Sales", xy=(5, 250), xytext=(3.5, 270),
                arrowprops=dict(arrowstyle="->"))
ax[0].legend()
ax[0].grid(True)

# Subplot 2: Expenses
ax[1].plot(months, expenses, marker="s", linewidth=2, label="Expenses")
ax[1].set_title("Monthly Expenses")
ax[1].set_xlabel("Month")
ax[1].set_ylabel("Expenses")
ax[1].set_xticks(range(len(months)))
ax[1].set_xticklabels(months)
ax[1].annotate("Highest Expense", xy=(5, 160), xytext=(3.5, 180),
                arrowprops=dict(arrowstyle="->"))
ax[1].legend()
ax[1].grid(True)

fig.suptitle("Monthly Sales and Expenses Analysis", fontsize=16)
plt.tight_layout()
plt.savefig("monthly_sales_expenses.png", dpi=300, bbox_inches="tight")
plt.show()`,
        expected_output: "The plot generates two synchronized subplots:\n- Top Subplot: Monthly sales progression with 'Highest Sales' pointing to June (250).\n- Bottom Subplot: Monthly expenses with 'Highest Expense' pointing to June (160).\nPlot saved successfully as 'monthly_sales_expenses.png' at 300 DPI.",
        result: "Thus, a line plot with titles, axis labels, ticks, tick labels, annotations, and multiple subplots was successfully created using Matplotlib and saved to an image file.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 3,
        experiment_number: "EXPERIMENT 03",
        title: "Grouped & Stacked Bar Plots Using DataFrame Index",
        short_description: "Create side-by-side grouped bar charts and stacked bar plots from Pandas DataFrames to compare multi-subject student marks.",
        tools: ["Python", "Pandas", "Matplotlib"],
        subject_code: "22DS102006",
        aim: "To create bar plots using Pandas Series and DataFrame index, and to create both grouped bar plots and stacked bar plots using Matplotlib.",
        objective: "Understand differences between grouped (side-by-side) and stacked bar visual representations when comparing categorical sub-groups.",
        theory: "Grouped bar plots place values side by side for direct comparison between individual attributes. Stacked bar plots place values on top of each other to visualize total magnitudes alongside individual constituent proportions.",
        requirements: "Python 3.x, Pandas, Matplotlib",
        dataset: "Student marks in programming languages (Python, Java, C++).",
        syntax: "Grouped: df.plot(kind='bar')\nStacked: df.plot(kind='bar', stacked=True)\nHorizontal: df.plot(kind='barh')",
        procedure: "1. Create DataFrame containing student marks in Python, Java, and C++ with Student IDs as index.\n2. Call df.plot(kind='bar') to construct side-by-side grouped bars.\n3. Format axes, labels, rotation, and legend.\n4. Call df.plot(kind='bar', stacked=True) to construct vertically stacked cumulative bars.\n5. Compare both charts to evaluate individual versus cumulative comparison.",
        python_code: `import pandas as pd
import matplotlib.pyplot as plt

# Create DataFrame
data = {
    'Python': [85, 90, 78, 88],
    'Java': [75, 82, 80, 85],
    'C++': [80, 76, 85, 90]
}
df = pd.DataFrame(data, index=['Student1', 'Student2', 'Student3', 'Student4'])
print("DataFrame:")
print(df)

# 1. Grouped Bar Plot (Side-by-Side)
df.plot(kind='bar', figsize=(8, 5))
plt.title("Student Marks in Different Programming Languages (Grouped)")
plt.xlabel("Students")
plt.ylabel("Marks")
plt.xticks(rotation=0)
plt.legend(title="Subjects")
plt.tight_layout()
plt.show()

# 2. Stacked Bar Plot
df.plot(kind='bar', stacked=True, figsize=(8, 5))
plt.title("Stacked Bar Plot of Student Marks")
plt.xlabel("Students")
plt.ylabel("Total Marks")
plt.xticks(rotation=0)
plt.legend(title="Subjects")
plt.tight_layout()
plt.show()`,
        expected_output: "DataFrame:\n          Python  Java  C++\nStudent1      85    75   80\nStudent2      90    82   76\nStudent3      78    80   85\nStudent4      88    85   90\n\nGraphical Output:\n1. Grouped Bar: 3 bars side-by-side per student.\n2. Stacked Bar: 1 vertical bar per student reaching cumulative mark totals (240 - 263).",
        result: "Thus, grouped bar plots and stacked bar plots were successfully created from a Pandas DataFrame using its index values.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 4,
        experiment_number: "EXPERIMENT 04",
        title: "Frequency Histogram & Continuous Density Plot (KDE)",
        short_description: "Display observed value frequency intervals with Histograms and model continuous probability density using KDE in Seaborn.",
        tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        subject_code: "22DS102006",
        aim: "To create a Histogram for displaying the frequency distribution of observed data and a Density Plot for representing the continuous probability distribution of the data using Python, Pandas, Matplotlib, and Seaborn.",
        objective: "Learn the distinction between discrete bin frequency counting (Histograms) and non-parametric Kernel Density Estimation (KDE).",
        theory: "A histogram groups continuous data into discrete bins, displaying frequency counts. A density plot (KDE) computes a smooth continuous curve representing the probability density function of the random variable.",
        requirements: "Python 3.x, Pandas, Matplotlib, Seaborn",
        dataset: "Sample observed student marks distribution array (45 to 95).",
        syntax: "sns.histplot(df['Marks'], bins=6, kde=False)\nsns.kdeplot(df['Marks'], fill=True)\nsns.histplot(df['Marks'], bins=6, kde=True)",
        procedure: "1. Define observed scores array and construct Pandas DataFrame.\n2. Generate discrete frequency histogram using sns.histplot(bins=6).\n3. Generate continuous probability density estimation using sns.kdeplot(fill=True).\n4. Combine histogram and smooth density curve in a single visualization with kde=True.",
        python_code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Sample observed data
data = [45, 50, 52, 55, 58, 60, 62, 65, 68, 70,
        72, 75, 78, 80, 82, 85, 88, 90, 92, 95]

df = pd.DataFrame({'Marks': data})
print("Observed Data:")
print(df)

# Create Histogram
plt.figure(figsize=(8, 5))
sns.histplot(df['Marks'], bins=6, kde=False)
plt.title("Histogram of Marks")
plt.xlabel("Marks")
plt.ylabel("Frequency")
plt.tight_layout()
plt.show()

# Create Density Plot
plt.figure(figsize=(8, 5))
sns.kdeplot(df['Marks'], fill=True)
plt.title("Density Plot of Marks")
plt.xlabel("Marks")
plt.ylabel("Density")
plt.tight_layout()
plt.show()

# Combined Histogram + Density Plot
plt.figure(figsize=(8, 5))
sns.histplot(df['Marks'], bins=6, kde=True)
plt.title("Histogram with Density Curve")
plt.xlabel("Marks")
plt.ylabel("Frequency / Density")
plt.tight_layout()
plt.show()`,
        expected_output: "Observed Data:\n    Marks\n0      45\n1      50\n...    ...\n19     95\n\nPlots produced:\n1. Discrete 6-bin histogram showing distribution spread.\n2. Smoothed continuous probability density function (KDE).\n3. Unified histogram with super-imposed KDE curve.",
        result: "Thus, a histogram and density plot were successfully created to visualize the frequency distribution and continuous probability distribution of the observed data.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 5,
        experiment_number: "EXPERIMENT 05",
        title: "Scatter Plot & Correlation Analysis for 1D Data Series",
        short_description: "Examine linear relationships and compute Pearson correlation coefficient between two one-dimensional data series.",
        tools: ["Python", "Pandas", "Matplotlib"],
        subject_code: "22DS102006",
        aim: "To create a Scatter Plot using two one-dimensional data series and examine the relationship or correlation between them using Python, Pandas, and Matplotlib.",
        objective: "Understand scatter plot coordinate mapping and compute Pearson correlation coefficient to quantify linear dependencies.",
        theory: "A scatter plot plots Cartesian coordinates for two variables to inspect visual relationships. The Pearson correlation coefficient ranges from -1 (perfect inverse correlation) to +1 (perfect positive correlation).",
        requirements: "Python 3.x, Pandas, Matplotlib",
        dataset: "Study hours versus Examination marks series.",
        syntax: "plt.scatter(x, y)\ndf['Study_Hours'].corr(df['Marks'])",
        procedure: "1. Create paired 1D data series: study_hours and marks.\n2. Assemble series into a Pandas DataFrame.\n3. Plot coordinate scatter using plt.scatter().\n4. Add gridlines, axis labels, and title.\n5. Compute Pearson correlation coefficient with .corr().\n6. Interpret directional correlation.",
        python_code: `import pandas as pd
import matplotlib.pyplot as plt

# Two one-dimensional data series
study_hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
marks = [45, 50, 55, 60, 65, 70, 72, 80, 85, 90]

# Create DataFrame
df = pd.DataFrame({
    'Study_Hours': study_hours,
    'Marks': marks
})
print("Data:")
print(df)

# Create Scatter Plot
plt.figure(figsize=(8, 5))
plt.scatter(df['Study_Hours'], df['Marks'])
plt.title("Relationship Between Study Hours and Marks")
plt.xlabel("Study Hours")
plt.ylabel("Marks")
plt.grid(True)
plt.tight_layout()
plt.show()

# Calculate correlation
correlation = df['Study_Hours'].corr(df['Marks'])
print("\\nCorrelation Coefficient:", round(correlation, 2))`,
        expected_output: "Data:\n   Study_Hours  Marks\n0            1     45\n1            2     50\n...         ..     ..\n9           10     90\n\nCorrelation Coefficient: 1.00\n(Indicates a strong, almost perfect positive linear relationship between study duration and marks scored).",
        result: "Thus, the scatter plot was successfully created and the relationship between the two one-dimensional data series was examined using the correlation coefficient.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 6,
        experiment_number: "EXPERIMENT 06",
        title: "Box Plots for Multi-Category Numerical Distributions",
        short_description: "Visualize medians, quartiles, and interquartile ranges (IQR) across multiple departments with Seaborn box plots.",
        tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        subject_code: "22DS102006",
        aim: "To create Box Plots for visualizing the distribution of numerical data across multiple categorical variables using Python, Pandas, Matplotlib, and Seaborn.",
        objective: "Interpret 5-number summaries (Min, Q1, Median, Q3, Max) and detect outliers across multiple categorical groups.",
        theory: "A box plot visually depicts groups of numerical data through their quartiles. Whiskers extend to non-outlier extremes, while points beyond 1.5 * IQR represent statistical outliers.",
        requirements: "Python 3.x, Pandas, Matplotlib, Seaborn",
        dataset: "Departmental student examination marks dataset (CSE, ECE, EEE).",
        syntax: "sns.boxplot(x='Department', y='Marks', data=df)",
        procedure: "1. Define dictionary with categorical Department tags and numeric Marks.\n2. Construct DataFrame and verify record distributions.\n3. Plot categorical box plot with sns.boxplot().\n4. Format dashed horizontal grid lines and title.\n5. Compare department medians and spread.",
        python_code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Create sample data
data = {
    'Department': [
        'CSE', 'CSE', 'CSE', 'CSE', 'CSE',
        'ECE', 'ECE', 'ECE', 'ECE', 'ECE',
        'EEE', 'EEE', 'EEE', 'EEE', 'EEE'
    ],
    'Marks': [
        78, 85, 90, 72, 88,
        65, 70, 82, 75, 80,
        60, 68, 72, 76, 85
    ]
}
df = pd.DataFrame(data)
print("Data:")
print(df)

# Create Box Plot
plt.figure(figsize=(8, 5))
sns.boxplot(x='Department', y='Marks', data=df)
plt.title("Marks Distribution by Department")
plt.xlabel("Department")
plt.ylabel("Marks")
plt.grid(axis='y', linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()`,
        expected_output: "Data:\n   Department  Marks\n0         CSE     78\n1         CSE     85\n...       ...    ...\n14        EEE     85\n\nBox plot displays 3 distinct department boxes:\n- CSE: Highest median (~85 marks)\n- ECE: Moderate median (~75 marks)\n- EEE: Wider spread from 60 to 85 marks",
        result: "Thus, the Box Plot was successfully created to visualize and compare the distribution of numerical data across multiple categorical variables.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 7,
        experiment_number: "EXPERIMENT 07",
        title: "Time Series Creation & Datetime Indexing in Pandas",
        short_description: "Construct time series using pd.to_datetime and index observations by continuous timestamps.",
        tools: ["Python", "Pandas"],
        subject_code: "22DS102006",
        aim: "To create a time series in Pandas using datetime objects and use the timestamps as the index of the time series.",
        objective: "Understand datetime object instantiation and timestamp indexing in temporal data analysis.",
        theory: "In pandas, time series are Series objects where the index consists of DatetimeIndex timestamps. This allows slicing by date ranges, frequency alignment, and temporal arithmetic.",
        requirements: "Python 3.x, Pandas",
        dataset: "Daily recorded temperature observations.",
        syntax: "pd.to_datetime(date_values)\npd.Series(data, index=datetime_index)",
        procedure: "1. Convert ISO date strings to datetime objects via pd.to_datetime().\n2. Define numerical observation values.\n3. Instantiate a Pandas Series using datetime objects as index.\n4. Display the resulting time series and inspect datetime64[ns] dtype.",
        python_code: `import pandas as pd

# Create datetime objects
dates = pd.to_datetime([
    '2026-01-01',
    '2026-01-02',
    '2026-01-03',
    '2026-01-04',
    '2026-01-05'
])

temperature = [28, 30, 29, 31, 32]

# Create time series with timestamps as index
time_series = pd.Series(temperature, index=dates)

print("Time Series:")
print(time_series)`,
        expected_output: "Time Series:\n2026-01-01    28\n2026-01-02    30\n2026-01-03    29\n2026-01-04    31\n2026-01-05    32\ndtype: int64",
        result: "The index of the Series consists of timestamps, while the corresponding values represent recorded temperature observations.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 8,
        experiment_number: "EXPERIMENT 08",
        title: "Generating Regular DatetimeIndex Sequences with date_range()",
        short_description: "Generate regular DatetimeIndex sequences with specified start, length, and daily frequency.",
        tools: ["Python", "Pandas"],
        subject_code: "22DS102006",
        aim: "To generate a DatetimeIndex of a specified length using the pandas.date_range() function.",
        objective: "Generate regular timestamp sequences by specifying start dates, period counts, and frequency parameters.",
        theory: "The pd.date_range() function generates a sequence of dates at fixed frequency intervals. Common frequencies include 'D' (daily), 'h' (hourly), and 'M' (monthly end).",
        requirements: "Python 3.x, Pandas",
        syntax: "pd.date_range(start='YYYY-MM-DD', periods=n, freq='D')",
        procedure: "1. Specify start date string '2026-01-01'.\n2. Pass periods=7 to generate exactly 7 timestamps.\n3. Set freq='D' for daily sequence.\n4. Print the generated DatetimeIndex.",
        python_code: `import pandas as pd

# Generate a DatetimeIndex with 7 dates
date_index = pd.date_range(
    start='2026-01-01',
    periods=7,
    freq='D'
)

print("Generated DatetimeIndex:")
print(date_index)`,
        expected_output: "Generated DatetimeIndex:\nDatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-03',\n               '2026-01-04', '2026-01-05', '2026-01-06',\n               '2026-01-07'],\n              dtype='datetime64[ns]', freq='D')",
        result: "Successfully generated a continuous 7-day DatetimeIndex sequence using pandas.date_range.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 9,
        experiment_number: "EXPERIMENT 09",
        title: "Time Zone Localization, Conversion (tz_convert) & Merging",
        short_description: "Set time zones, localize naive timestamps, convert between Kolkata & New York time zones, and combine series.",
        tools: ["Python", "Pandas"],
        subject_code: "22DS102006",
        aim: "To generate date ranges by setting a time zone, localizing a time zone, converting timestamps to another time zone using tz_convert(), and combining time-series data from two different time zones using Pandas.",
        objective: "Manage time zone metadata, UTC offsets, daylight saving transitions, and cross-zone time series alignment.",
        theory: "Timezone-naive timestamps contain no timezone information. Localizing (tz_localize) assigns a specific geographical offset. Converting (tz_convert) shifts timestamps to match another clock.",
        requirements: "Python 3.x, Pandas",
        syntax: "tz_localize('Asia/Kolkata')\ntz_convert('America/New_York')\npd.concat([s1, s2])",
        procedure: "1. Generate dates with 'Asia/Kolkata' timezone.\n2. Create timezone-naive dates and localize with tz_localize().\n3. Convert localized dates to 'America/New_York' with tz_convert().\n4. Create two separate Series representing India and New York records.\n5. Concatenate both series using pd.concat().",
        python_code: `import pandas as pd

# 1. Generate date range with Asia/Kolkata Time Zone
india_dates = pd.date_range(start='2026-01-01 09:00', periods=3, freq='h', tz='Asia/Kolkata')
print("1. Date Range with Asia/Kolkata Time Zone:")
print(india_dates)

# 2. Timezone-naive DatetimeIndex
dates = pd.date_range(start='2026-01-01 09:00', periods=3, freq='h')

# 3. Localize to Asia/Kolkata
localized_dates = dates.tz_localize('Asia/Kolkata')
print("\\n3. After Localizing to Asia/Kolkata:")
print(localized_dates)

# 4. Convert to America/New_York
new_york_dates = localized_dates.tz_convert('America/New_York')
print("\\n4. Converted to America/New_York:")
print(new_york_dates)

# 5. Create series in different time zones
india_series = pd.Series([100, 200, 300], index=localized_dates)
new_york_series = pd.Series([400, 500, 600], index=new_york_dates)

# 6. Combine series
combined_series = pd.concat([india_series, new_york_series])
print("\\n6. Combined Time Series:")
print(combined_series)`,
        expected_output: "1. Asia/Kolkata: 09:00+05:30 to 11:00+05:30\n4. America/New_York: 2025-12-31 22:30:00-05:00 to 00:30:00-05:00\n6. Combined Time Series:\nCombines all timestamps into a single chronological sequence.",
        result: "Successfully localized time zones, converted timestamps across global time zones, and combined time-series data.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 10,
        experiment_number: "EXPERIMENT 10",
        title: "Period Arithmetic & Period Sequence Generation with period_range()",
        short_description: "Perform period arithmetic by adding/subtracting integers from periods and generate ranges with period_range.",
        tools: ["Python", "Pandas"],
        subject_code: "22DS102006",
        aim: "To perform period arithmetic by adding and subtracting integers from Pandas Period objects and to construct a range of periods using the period_range() function.",
        objective: "Understand calendar time spans (Periods) versus instant timestamps, and perform frequency-aware period arithmetic.",
        theory: "A Period represents a time span (e.g., month, quarter, year). Adding an integer advances the period by that many frequency units, respecting calendar boundaries.",
        requirements: "Python 3.x, Pandas",
        syntax: "pd.Period('2026-01', freq='M')\nperiod + integer\nperiod - integer\npd.period_range(start, periods=n, freq='M')",
        procedure: "1. Instantiate a monthly Period object ('2026-01', freq='M').\n2. Add integers to shift period forward (p + 2, p + 5).\n3. Subtract integers to shift period backward (p - 1, p - 3).\n4. Generate sequence of 6 monthly periods using pd.period_range().",
        python_code: `import pandas as pd

# Create a monthly Period
p = pd.Period('2026-01', freq='M')
print("Original Period:")
print(p)

# Add integers
print("\\nAfter adding 2:", p + 2)
print("After adding 5:", p + 5)

# Subtract integers
print("\\nAfter subtracting 1:", p - 1)
print("After subtracting 3:", p - 3)

# Create range of periods
periods = pd.period_range(start='2026-01', periods=6, freq='M')
print("\\nRange of Periods:")
print(periods)`,
        expected_output: "Original Period: 2026-01\nAfter adding 2: 2026-03\nAfter adding 5: 2026-06\nAfter subtracting 1: 2025-12\nAfter subtracting 3: 2025-10\nRange of Periods: PeriodIndex(['2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06'], dtype='period[M]')",
        result: "Period arithmetic and period sequences were successfully constructed and shifted across calendar boundaries.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 11,
        experiment_number: "EXPERIMENT 11",
        title: "Period Frequency Conversion with asfreq()",
        short_description: "Convert Pandas Period and PeriodIndex objects from monthly to daily frequency using the asfreq method.",
        tools: ["Python", "Pandas"],
        subject_code: "22DS102006",
        aim: "To convert Pandas Period and PeriodIndex objects from one frequency to another using the asfreq() method.",
        objective: "Understand period frequency upsampling and conversion to period start and period end boundaries.",
        theory: "The asfreq() method converts a period to a different frequency. The how parameter specifies whether the new period corresponds to the start ('start') or end ('end') of the parent period.",
        requirements: "Python 3.x, Pandas",
        syntax: "period.asfreq('D', how='start')\nperiod_index.asfreq('D', how='end')",
        procedure: "1. Instantiate monthly Period '2026-01'.\n2. Convert to daily frequency targeting start date (how='start').\n3. Convert to daily frequency targeting end date (how='end').\n4. Generate a 3-month PeriodIndex.\n5. Convert entire PeriodIndex to daily frequencies at both boundaries.",
        python_code: `import pandas as pd

# 1. Create a monthly Period
p = pd.Period('2026-01', freq='M')
print("Original Period:", p)

# 2. Convert to daily frequency
daily_start = p.asfreq('D', how='start')
print("Monthly Period to Daily (Start):", daily_start)

daily_end = p.asfreq('D', how='end')
print("Monthly Period to Daily (End):", daily_end)

# 3. Create PeriodIndex
period_index = pd.period_range(start='2026-01', periods=3, freq='M')

# 4. Convert PeriodIndex to daily
daily_period_index = period_index.asfreq('D', how='start')
print("\\nPeriodIndex Daily (Start):\\n", daily_period_index)

daily_period_index_end = period_index.asfreq('D', how='end')
print("\\nPeriodIndex Daily (End):\\n", daily_period_index_end)`,
        expected_output: "Original Period: 2026-01\nMonthly to Daily (Start): 2026-01-01\nMonthly to Daily (End): 2026-01-31\nPeriodIndex Daily (Start): ['2026-01-01', '2026-02-01', '2026-03-01']\nPeriodIndex Daily (End): ['2026-01-31', '2026-02-28', '2026-03-31']",
        result: "Successfully converted Periods and PeriodIndex objects to daily frequencies at both start and end boundaries.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 12,
        experiment_number: "EXPERIMENT 12",
        title: "Converting Timestamp Indices to Period Indices with to_period()",
        short_description: "Transform timestamp-indexed Series and DataFrames into period-indexed structures using to_period.",
        tools: ["Python", "Pandas"],
        subject_code: "22DS102006",
        aim: "To convert Series and DataFrame objects indexed by timestamps into Period and PeriodIndex objects using the Pandas to_period() method.",
        objective: "Convert exact timestamps into representative calendar periods (daily, monthly, quarterly) for macro-level aggregation.",
        theory: "The to_period() method converts timestamp indices to PeriodIndex objects. This simplifies period-based accounting, quarterly financial summaries, and monthly reporting.",
        requirements: "Python 3.x, Pandas",
        syntax: "series.to_period('M')\ndataframe.to_period('M')",
        procedure: "1. Create timestamp list spanning several months.\n2. Build a Series representing sales records indexed by timestamps.\n3. Convert Series to monthly periods using .to_period('M').\n4. Build DataFrame representing Sales and Profit.\n5. Convert DataFrame index to monthly periods.",
        python_code: `import pandas as pd

dates = pd.to_datetime([
    '2026-01-10',
    '2026-02-15',
    '2026-03-20',
    '2026-04-25'
])

# Series
sales = pd.Series([1000, 1500, 1800, 2200], index=dates)
print("Original Series:")
print(sales)

period_series = sales.to_period('M')
print("\\nSeries converted to Monthly Periods:")
print(period_series)

# DataFrame
df = pd.DataFrame({
    'Sales': [1000, 1500, 1800, 2200],
    'Profit': [200, 300, 400, 500]
}, index=dates)

period_df = df.to_period('M')
print("\\nDataFrame converted to Monthly Periods:")
print(period_df)`,
        expected_output: "Series converted to Monthly Periods:\n2026-01    1000\n2026-02    1500\n2026-03    1800\n2026-04    2200\nFreq: M, dtype: int64\n\nDataFrame converted to Monthly Periods:\n         Sales  Profit\n2026-01   1000     200\n2026-02   1500     300\n2026-03   1800     400\n2026-04   2200     500\nFreq: M",
        result: "Successfully transformed timestamp-indexed Series and DataFrames into period-indexed structures using to_period().",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 13,
        experiment_number: "EXPERIMENT 13",
        title: "Time Series Resampling, Downsampling & Upsampling",
        short_description: "Execute temporal resampling: compute 3-hour averages, downsample hourly data to 4-hour totals, and upsample with forward fill.",
        tools: ["Python", "Pandas"],
        subject_code: "22DS102006",
        aim: "To perform resampling, downsampling, and upsampling operations on a time series using Pandas.",
        objective: "Master temporal aggregation (downsampling) and frequency expansion with forward fill interpolation (upsampling).",
        theory: "Resampling changes the frequency of a time series. Downsampling reduces frequency with aggregation (mean, sum). Upsampling increases frequency, requiring interpolation (ffill) to populate newly created time slots.",
        requirements: "Python 3.x, Pandas",
        syntax: "series.resample('3h').mean()\nseries.resample('4h').sum()\nseries.resample('30min').ffill()",
        procedure: "1. Create hourly time series with 12 timestamps.\n2. Resample to 3-hour frequency computing the mean.\n3. Downsample to 4-hour frequency computing the sum.\n4. Upsample to 30-minute intervals showing NaN insertion.\n5. Upsample with forward fill (.ffill()) to propagate previous observations.",
        python_code: `import pandas as pd

dates = pd.date_range(start='2026-01-01 00:00', periods=12, freq='h')
values = [10, 12, 15, 14, 18, 20, 22, 21, 25, 28, 30, 32]
time_series = pd.Series(values, index=dates)
print("Original Hourly Time Series:")
print(time_series)

# 1. Resampling - 3-hour mean
resampled = time_series.resample('3h').mean()
print("\\nResampled (3 Hour Mean):")
print(resampled)

# 2. Downsampling - 4-hour sum
downsampled = time_series.resample('4h').sum()
print("\\nDownsampled (4 Hour Sum):")
print(downsampled)

# 3. Upsampling - 30-minute intervals
upsampled = time_series.resample('30min').asfreq()
print("\\nUpsampled (30 Min AsFreq):")
print(upsampled.head(6))

# 4. Upsampling with Forward Fill
upsampled_ffill = time_series.resample('30min').ffill()
print("\\nUpsampled with Forward Fill:")
print(upsampled_ffill.head(6))`,
        expected_output: "Resampled (3 Hour Mean):\n2026-01-01 00:00:00    12.333333\n2026-01-01 03:00:00    17.333333\n2026-01-01 06:00:00    22.666667\n2026-01-01 09:00:00    30.000000\n\nDownsampled (4 Hour Sum):\n2026-01-01 00:00:00     51\n2026-01-01 04:00:00     81\n2026-01-01 08:00:00    115",
        result: "Successfully implemented time series resampling, downsampling with sum aggregation, and upsampling with forward-fill interpolation.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 14,
        experiment_number: "EXPERIMENT 14",
        title: "Tabular Data Splitting & GroupBy Using Single & Multiple Keys",
        short_description: "Split DataFrame records into groups using single-key and multiple-key groupby operations, and compute subgroup metrics.",
        tools: ["Python", "Pandas"],
        subject_code: "22DS102006",
        aim: "To create a tabular dataset as a DataFrame and split data into groups using groupby method including single key and multiple key values. Select group by considering single and multiple columns.",
        objective: "Master the Split-Apply-Combine paradigm in Pandas using single and compound groupby keys.",
        theory: "The groupby mechanism splits a dataset into distinct subsets based on matching key values, applies a function (such as mean or sum), and combines the results into a structured summary.",
        requirements: "Python 3.x, Pandas",
        dataset: "Student academic records with Name, Department, Year, and Marks.",
        syntax: "df.groupby('Department')\ndf.groupby(['Department', 'Year'])['Marks'].mean()",
        procedure: "1. Create DataFrame with student names, departments, years, and marks.\n2. Split dataset by single key ('Department') and iterate over groups.\n3. Compute average marks per department.\n4. Split dataset by compound keys (['Department', 'Year']).\n5. Compute hierarchical average marks.",
        python_code: `import pandas as pd

# Create tabular dataset
data = {
    'Name': ['Ravi', 'Sita', 'Arun', 'Priya', 'Kiran', 'Anil', 'Lakshmi', 'Rahul'],
    'Department': ['CSE', 'CSE', 'ECE', 'ECE', 'CSE', 'ECE', 'CSE', 'ECE'],
    'Year': [2, 2, 3, 3, 2, 3, 3, 2],
    'Marks': [85, 90, 78, 88, 75, 82, 95, 70]
}
df = pd.DataFrame(data)
print("Original DataFrame:")
print(df)

# 1. Group by single key (Department)
print("\\n1. Group by Department:")
group1 = df.groupby('Department')
for name, group in group1:
    print("\\nDepartment:", name)
    print(group)

print("\\nAverage Marks by Department:")
print(df.groupby('Department')['Marks'].mean())

# 2. Group by multiple keys (Department and Year)
print("\\n2. Group by Department and Year:")
group2 = df.groupby(['Department', 'Year'])
for name, group in group2:
    print("\\nGroup:", name)
    print(group)

print("\\nAverage Marks by Department and Year:")
print(df.groupby(['Department', 'Year'])['Marks'].mean())`,
        expected_output: "Average Marks by Department:\nDepartment\nCSE    86.25\nECE    79.50\n\nAverage Marks by Department and Year:\nDepartment  Year\nCSE         2       83.333333\n            3       95.000000\nECE         2       70.000000\n            3       82.666667",
        result: "Successfully split tabular data into subsets using single and multiple groupby keys, and calculated department/year statistics.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 15,
        experiment_number: "EXPERIMENT 15",
        title: "Multi-Metric Summary Statistics with aggregate()",
        short_description: "Calculate sum, mean, and standard deviation across multiple columns simultaneously using the groupby aggregate method.",
        tools: ["Python", "Pandas"],
        subject_code: "22DS102006",
        aim: "To compute summary statistics such as sum, mean and standard deviation for the grouped data using aggregate method.",
        objective: "Execute multi-column, multi-metric aggregations in a single vectorized operation using dictionary-mapped aggregate().",
        theory: "The aggregate() (or agg()) method allows users to apply multiple reduction functions (e.g., sum, mean, std) across different DataFrame columns simultaneously, producing clean multi-index output.",
        requirements: "Python 3.x, Pandas",
        dataset: "Department marks and attendance records.",
        syntax: "df.groupby('Department').aggregate({'Marks': ['sum', 'mean', 'std'], 'Attendance': ['sum', 'mean', 'std']})",
        procedure: "1. Build DataFrame with Department, Marks, and Attendance.\n2. Group records by Department.\n3. Apply .aggregate() with a dictionary mapping columns to statistical functions.\n4. Print summary statistics matrix.",
        python_code: `import pandas as pd

data = {
    'Department': ['CSE', 'CSE', 'CSE', 'ECE', 'ECE', 'ECE', 'EEE', 'EEE', 'EEE'],
    'Marks': [80, 75, 85, 70, 65, 75, 90, 85, 95],
    'Attendance': [90, 85, 95, 80, 75, 85, 95, 90, 100]
}
df = pd.DataFrame(data)
print("Original DataFrame:")
print(df)

result = df.groupby('Department').aggregate({
    'Marks': ['sum', 'mean', 'std'],
    'Attendance': ['sum', 'mean', 'std']
})

print("\\nSummary Statistics:")
print(result)`,
        expected_output: "Summary Statistics:\n           Marks                   Attendance\n             sum  mean  std            sum        mean       std\nDepartment\nCSE           240  80.0  5.0           270   90.000000  5.000000\nECE           210  70.0  5.0           240   80.000000  5.000000\nEEE           270  90.0  5.0           285   95.000000  5.000000",
        result: "Summary statistics (sum, mean, std) were successfully computed across multiple features using the aggregate method.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 16,
        experiment_number: "EXPERIMENT 16",
        title: "Exploratory Data Analysis & GroupBy on Online Dataset",
        short_description: "Split an online Iris dataset by single & multiple columns, compute statistical summaries, and perform exploratory data analysis.",
        tools: ["Python", "Pandas"],
        subject_code: "22DS102006",
        aim: "To use groupby function to split data into groups based on one column, multiple columns, compute summary statistics and perform exploratory data analysis considering an online dataset for processing.",
        objective: "Perform comprehensive exploratory data analysis (EDA) and multi-column groupings on a real-world online dataset.",
        theory: "Exploratory Data Analysis (EDA) investigates datasets to understand patterns, spot anomalies, and test hypotheses through summary statistics and visual profiling.",
        requirements: "Python 3.x, Pandas",
        dataset: "Remote Iris CSV dataset.",
        syntax: "df.groupby('species')['sepal_length'].agg(['count', 'sum', 'mean', 'std', 'min', 'max'])",
        procedure: "1. Read online Iris dataset using pd.read_csv().\n2. Perform single-column groupby on species with 6 statistical metrics.\n3. Perform multiple-column groupby on species and sepal_width.\n4. Compute summary statistics across all numerical features.\n5. Compute species value counts and maximum sepal lengths.",
        python_code: `import pandas as pd

url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
df = pd.read_csv(url)

print("First 5 Records:")
print(df.head())

# 1. GroupBy single column
print("\\n1. GroupBy using a Single Column:")
group_single = df.groupby('species')['sepal_length'].agg(
    ['count', 'sum', 'mean', 'std', 'min', 'max']
)
print(group_single)

# 2. GroupBy multiple columns
print("\\n2. GroupBy using Multiple Columns:")
group_multiple = df.groupby(['species', 'sepal_width'])['sepal_length'].mean()
print(group_multiple.head(10))

# 3. Summary statistics for each species
print("\\n3. Summary Statistics:")
summary = df.groupby('species').agg({
    'sepal_length': ['mean', 'std', 'min', 'max'],
    'sepal_width': ['mean', 'std', 'min', 'max'],
    'petal_length': ['mean', 'std', 'min', 'max'],
    'petal_width': ['mean', 'std', 'min', 'max']
})
print(summary)

# 4. Exploratory Data Analysis
print("\\n4. Records per species:")
print(df['species'].value_counts())
print("\\nAverage Petal Length by Species:")
print(df.groupby('species')['petal_length'].mean())`,
        expected_output: "GroupBy using a Single Column:\n            count    sum   mean       std  min  max\nspecies\nsetosa         50  250.3  5.006  0.352490  4.3  5.8\nversicolor     50  296.8  5.936  0.516171  4.9  7.0\nvirginica      50  329.4  6.588  0.635880  4.9  7.9",
        result: "Exploratory data analysis and multi-column groupings were successfully executed on the online Iris dataset.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 17,
        experiment_number: "EXPERIMENT 17",
        title: "Web Scraping Product Reviews with Beautiful Soup",
        short_description: "Extract customer review titles, text, and star ratings from HTML DOM elements using Beautiful Soup and export to CSV.",
        tools: ["Python", "BeautifulSoup4", "Pandas"],
        subject_code: "22DS102006",
        aim: "To extract product reviews and related information from an authorized HTML page or permitted review source using Beautiful Soup and save the extracted data into a CSV file for further analysis.",
        objective: "Understand HTML DOM navigation, CSS selector targeting, text extraction, and saving structured web data to CSV.",
        theory: "Beautiful Soup is a Python parsing library for HTML and XML documents. It parses DOM trees into pythonic objects, enabling targeted node extraction via CSS selectors.",
        requirements: "Python 3.x, BeautifulSoup4, Pandas",
        dataset: "Saved product reviews HTML page (`reviews.html`).",
        syntax: "soup = BeautifulSoup(html, 'html.parser')\nblocks = soup.select('.review')\ntext = el.get_text(' ', strip=True)",
        procedure: "1. Load authorized reviews HTML file.\n2. Parse DOM with BeautifulSoup(html_content, 'html.parser').\n3. Iterate over .review container nodes.\n4. Extract review title (.review-title), body (.review-text), and rating (.rating).\n5. Store records in Pandas DataFrame and export to 'product_reviews.csv'.",
        python_code: `from bs4 import BeautifulSoup
import pandas as pd

# Read HTML content (from file or sample HTML)
html_sample = """
<div class="reviews">
    <div class="review">
        <span class="review-title">Great product</span>
        <span class="rating">5 out of 5</span>
        <p class="review-text">Excellent quality and high performance. Would highly recommend.</p>
    </div>
    <div class="review">
        <span class="review-title">Not satisfied</span>
        <span class="rating">2 out of 5</span>
        <p class="review-text">The product stopped working after a week. Very poor build.</p>
    </div>
    <div class="review">
        <span class="review-title">Worth buying</span>
        <span class="rating">4 out of 5</span>
        <p class="review-text">Good performance, decent battery life, and comfortable design.</p>
    </div>
</div>
"""

soup = BeautifulSoup(html_sample, "html.parser")
review_blocks = soup.select(".review")
records = []

for block in review_blocks:
    review_el = block.select_one(".review-text")
    rating_el = block.select_one(".rating")
    title_el = block.select_one(".review-title")
    
    review_text = review_el.get_text(" ", strip=True) if review_el else ""
    rating_text = rating_el.get_text(" ", strip=True) if rating_el else ""
    title = title_el.get_text(" ", strip=True) if title_el else ""
    
    if review_text:
        records.append({
            "title": title,
            "review": review_text,
            "rating": rating_text
        })

df = pd.DataFrame(records)
df.to_csv("product_reviews.csv", index=False, encoding="utf-8-sig")
print("Extracted Reviews Preview:")
print(df.head())
print("Total reviews extracted:", len(df))`,
        expected_output: "Extracted Reviews Preview:\n           title                  review      rating\n0  Great product    Excellent quality...  5 out of 5\n1  Not satisfied  The product stopped...  2 out of 5\n2   Worth buying    Good performance...   4 out of 5\nTotal reviews extracted: 3\nSaved to product_reviews.csv",
        result: "Product reviews were successfully parsed and extracted using Beautiful Soup, and saved to a structured CSV file.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 18,
        experiment_number: "EXPERIMENT 18",
        title: "Exploratory Text Analysis & Multi-Category WordClouds",
        short_description: "Classify reviews with VADER and generate separate WordCloud visualizations for All, Positive, and Negative feedback.",
        tools: ["Python", "Pandas", "WordCloud", "vaderSentiment", "Matplotlib"],
        subject_code: "22DS102006",
        aim: "To perform exploratory data analysis (EDA) on product reviews and generate WordCloud visualizations for all reviews, positive reviews, and negative reviews.",
        objective: "Perform sentiment scoring with VADER and construct frequency-weighted WordCloud graphics.",
        theory: "A WordCloud visually scales words proportionally to their frequency of occurrence in text. Separating positive and negative feedback clouds clarifies consumer sentiment drivers.",
        requirements: "Python 3.x, Pandas, Matplotlib, WordCloud, vaderSentiment",
        dataset: "product_reviews.csv",
        syntax: "WordCloud(width=1200, height=600, background_color='white').generate(text)\nSentimentIntensityAnalyzer().polarity_scores(text)",
        procedure: "1. Read extracted review CSV.\n2. Classify sentiments using VADER compound score (Positive >= 0.05, Negative <= -0.05).\n3. Generate WordCloud for all reviews combined.\n4. Filter positive reviews and render positive WordCloud.\n5. Filter negative reviews and render negative WordCloud.\n6. Export graphics at 300 DPI.",
        python_code: `import pandas as pd
import matplotlib.pyplot as plt
from wordcloud import WordCloud
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

df = pd.read_csv("product_reviews.csv")
df["review"] = df["review"].fillna("").astype(str)

analyzer = SentimentIntensityAnalyzer()

def classify_sentiment(text):
    score = analyzer.polarity_scores(text)["compound"]
    if score >= 0.05:
        return "Positive"
    elif score <= -0.05:
        return "Negative"
    return "Neutral"

df["sentiment"] = df["review"].apply(classify_sentiment)

def generate_wordcloud(text, title, filename):
    if not text.strip():
        return
    cloud = WordCloud(width=1200, height=600, background_color="white", max_words=150).generate(text)
    plt.figure(figsize=(10, 5))
    plt.imshow(cloud, interpolation="bilinear")
    plt.axis("off")
    plt.title(title)
    plt.tight_layout()
    plt.savefig(filename, dpi=300)
    plt.show()

# Generate WordClouds
generate_wordcloud(" ".join(df["review"]), "WordCloud - All Reviews", "wordcloud_all.png")
generate_wordcloud(" ".join(df.loc[df["sentiment"]=="Positive", "review"]), "Positive Reviews", "wordcloud_pos.png")
generate_wordcloud(" ".join(df.loc[df["sentiment"]=="Negative", "review"]), "Negative Reviews", "wordcloud_neg.png")
print(df["sentiment"].value_counts())`,
        expected_output: "WordCloud visualizations generated successfully:\n1. All Reviews WordCloud\n2. Positive Reviews WordCloud\n3. Negative Reviews WordCloud\nSentiment distribution counts printed.",
        result: "Exploratory text analysis was performed, and WordCloud visualizations for all, positive, and negative reviews were generated.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 19,
        experiment_number: "EXPERIMENT 19",
        title: "Distribution of Stopwords, Numerics, Word/Character Counts",
        short_description: "Calculate review text statistics (stopwords, numerics, word count, character count, avg word length) and plot distributions.",
        tools: ["Python", "NLTK", "Pandas", "Matplotlib", "Seaborn"],
        subject_code: "22DS102006",
        aim: "To analyze product reviews by calculating stopword frequency, numeric-token frequency, word count, character count, and average word length, and to visualize their distributions.",
        objective: "Extract lexical and structural text statistics using regular expressions and NLTK stopword lexicons.",
        theory: "Lexical profiling measures the length, vocabulary richness, stopword proportion, and numeric density of text corpora to assess review verbosity and quality.",
        requirements: "Python 3.x, NLTK, Pandas, Matplotlib, Seaborn",
        dataset: "product_reviews.csv",
        syntax: "tokens = re.findall(r'\\b[\\w\']+\\b', text.lower())\nstop_words = set(stopwords.words('english'))\nsns.histplot(data=df, x=col, kde=True)",
        procedure: "1. Download NLTK English stopwords.\n2. Write analyze_review() computing token count, character length, numeric tokens, stopwords, and mean word length.\n3. Apply across review DataFrame.\n4. Create 5-panel subplot histogram with KDE curves.\n5. Output top 10 most frequent stopwords and statistical summary.",
        python_code: `import re
import pandas as pd
import nltk
import matplotlib.pyplot as plt
import seaborn as sns
from nltk.corpus import stopwords
from collections import Counter

nltk.download("stopwords", quiet=True)
df = pd.read_csv("product_reviews.csv")
df["review"] = df["review"].fillna("").astype(str)
stop_words = set(stopwords.words("english"))

def analyze_review(text):
    tokens = re.findall(r"\\b[\\w']+\\b", text.lower())
    words = re.findall(r"\\b[A-Za-z]+\\b", text)
    numeric_tokens = re.findall(r"\\b\\d+(?:\\.\\d+)?\\b", text)
    stopword_tokens = [t for t in tokens if t in stop_words]
    return pd.Series({
        "word_count": len(tokens),
        "character_count": len(text),
        "numeric_count": len(numeric_tokens),
        "stopword_count": len(stopword_tokens),
        "average_word_length": (sum(len(w) for w in words) / len(words) if words else 0)
    })

stats = df["review"].apply(analyze_review)
df = pd.concat([df, stats], axis=1)

print("Text Statistics Summary:")
print(df[["word_count", "character_count", "numeric_count", "stopword_count", "average_word_length"]].describe())`,
        expected_output: "Descriptive statistics printed for:\n- stopword_count\n- numeric_count\n- word_count\n- character_count\n- average_word_length\nMulti-panel distribution histograms plotted.",
        result: "Product reviews were successfully analyzed for lexical distributions and statistical metrics.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 20,
        experiment_number: "EXPERIMENT 20",
        title: "Sentiment Polarity Analysis Using NLTK and VADER",
        short_description: "Calculate positive, negative, neutral, and compound polarity scores using NLTK VADER and classify reviews.",
        tools: ["Python", "NLTK", "vaderSentiment", "Pandas"],
        subject_code: "22DS102006",
        aim: "To calculate and compare the sentiment polarity of product reviews using the NLTK library and the VADER sentiment analyzer, and classify reviews as positive, negative, or neutral.",
        objective: "Understand lexicon-based sentiment analysis, compound polarity normalization (-1 to +1), and decision boundaries.",
        theory: "VADER (Valence Aware Dictionary and sEntiment Reasoner) evaluates valence scores for text words, incorporating punctuation and modifiers to produce compound scores.",
        requirements: "Python 3.x, NLTK (vader_lexicon), vaderSentiment, Pandas",
        dataset: "product_reviews.csv",
        syntax: "analyzer = SentimentIntensityAnalyzer()\nscores = analyzer.polarity_scores(text)\n# compound score >= 0.05 is Positive, <= -0.05 is Negative",
        procedure: "1. Download NLTK vader_lexicon.\n2. Instantiate SentimentIntensityAnalyzer from NLTK and standalone vaderSentiment.\n3. Calculate polarity_scores() for all reviews.\n4. Extract pos, neg, neu, and compound components.\n5. Categorize reviews into Positive, Negative, or Neutral.\n6. Save results to 'sentiment_analysis_results.csv'.",
        python_code: `import pandas as pd
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer as NLTKVADER
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer as StandaloneVADER

nltk.download("vader_lexicon", quiet=True)
df = pd.read_csv("product_reviews.csv")
df["review"] = df["review"].fillna("").astype(str)

nltk_analyzer = NLTKVADER()
vader_analyzer = StandaloneVADER()

def classify(score):
    if score >= 0.05:
        return "Positive"
    elif score <= -0.05:
        return "Negative"
    return "Neutral"

nltk_scores = df["review"].apply(nltk_analyzer.polarity_scores)
df["nltk_compound"] = nltk_scores.apply(lambda x: x["compound"])
df["nltk_sentiment"] = df["nltk_compound"].apply(classify)

print("Sample Sentiment Results:")
print(df[["review", "nltk_compound", "nltk_sentiment"]].head())
print("\\nSentiment Distribution:")
print(df["nltk_sentiment"].value_counts())

df.to_csv("sentiment_analysis_results.csv", index=False)`,
        expected_output: "Sample Sentiment Results:\n                      review  nltk_compound nltk_sentiment\n0  Excellent quality and...         0.7717        Positive\n1    The product stopped...        -0.5423        Negative\n2   Good performance, de...         0.7269        Positive",
        result: "Sentiment polarity scores were calculated using NLTK and VADER, and reviews were classified into positive, negative, and neutral categories.",
        github_repo: GITHUB_REPO_URL
    },
    {
        id: 21,
        experiment_number: "EXPERIMENT 21",
        title: "Scatter Intensity Plot of Sentiments with Thresholds",
        short_description: "Visualize customer sentiment strength on a 2D scatter plot with positive and negative threshold reference lines.",
        tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        subject_code: "22DS102006",
        aim: "To visualize the sentiment intensity of product reviews using a scatter plot, with review index on the X-axis and the VADER compound sentiment score on the Y-axis.",
        objective: "Visually detect sentiment clusters, polarity trends, and extreme satisfaction/dissatisfaction points.",
        theory: "A sentiment intensity scatter plot maps each review's compound score on [-1, +1]. Dashed threshold lines (+0.05 and -0.05) clearly separate positive and negative opinion zones.",
        requirements: "Python 3.x, Pandas, Matplotlib, Seaborn",
        dataset: "sentiment_analysis_results.csv",
        syntax: "sns.scatterplot(data=df, x='review_index', y='vader_compound', hue='vader_sentiment')\nplt.axhline(y=0.05, linestyle='--')\nplt.axhline(y=-0.05, linestyle='--')",
        procedure: "1. Load sentiment_analysis_results.csv.\n2. Ensure numeric compound scores and assign sequential review indices.\n3. Plot scatter chart with review index on X and compound score on Y.\n4. Color points by sentiment category (Green for Positive, Red for Negative, Gray for Neutral).\n5. Draw horizontal threshold lines at +0.05, -0.05, and 0.\n6. Save plot at 300 DPI.",
        python_code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("sentiment_analysis_results.csv")
df["review_index"] = range(1, len(df) + 1)

palette = {"Positive": "green", "Negative": "red", "Neutral": "gray"}

plt.figure(figsize=(12, 6))
sns.scatterplot(
    data=df,
    x="review_index",
    y="nltk_compound",
    hue="nltk_sentiment",
    palette=palette,
    s=80,
    alpha=0.85
)

# Reference Thresholds
plt.axhline(y=0.05, color="green", linestyle="--", label="Positive threshold (+0.05)")
plt.axhline(y=-0.05, color="red", linestyle="--", label="Negative threshold (-0.05)")
plt.axhline(y=0, color="black", linestyle=":", label="Neutral reference (0.0)")

plt.ylim(-1.05, 1.05)
plt.xlabel("Review Index")
plt.ylabel("VADER Compound Sentiment Score")
plt.title("Sentiment Intensity of Product Reviews")
plt.legend(loc="best")
plt.grid(alpha=0.3)
plt.tight_layout()
plt.savefig("sentiment_intensity_scatter.png", dpi=300)
plt.show()`,
        expected_output: "Scatter intensity plot displaying review indices along X-axis and VADER compound scores (-1.0 to +1.0) on Y-axis with horizontal threshold markers.",
        result: "A scatter intensity plot was successfully generated to visualize compound sentiment scores and compare positive, negative, and neutral feedback.",
        github_repo: GITHUB_REPO_URL
    }
];

function getExperiments() {
    const version = localStorage.getItem('experiments_curriculum_v6');
    if (version !== 'v6_full_syllabus') {
        localStorage.setItem('experiments_curriculum_v6', 'v6_full_syllabus');
        localStorage.setItem('experiments_v6_data', JSON.stringify(initialExperiments));
        return initialExperiments;
    }
    const stored = localStorage.getItem('experiments_v6_data');
    if (stored) {
        return JSON.parse(stored);
    }
    localStorage.setItem('experiments_v6_data', JSON.stringify(initialExperiments));
    return initialExperiments;
}

function saveExperiment(exp) {
    const experiments = getExperiments();
    exp.id = experiments.length ? Math.max(...experiments.map(e => e.id)) + 1 : 1;
    if (!exp.github_repo) {
        exp.github_repo = GITHUB_REPO_URL;
    }
    experiments.push(exp);
    localStorage.setItem('experiments_v6_data', JSON.stringify(experiments));
    return exp;
}

function getExperimentById(id) {
    const experiments = getExperiments();
    return experiments.find(e => e.id === parseInt(id));
}
