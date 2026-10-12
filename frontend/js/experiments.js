const initialExperiments = [
    {
        id: 1,
        experiment_number: "EXPERIMENT 01",
        title: "Time Series Analysis",
        short_description: "Analyze and visualize time-dependent data using Python and Pandas.",
        tools: ["Python", "Pandas", "Matplotlib"],
        aim: "To perform time series analysis on a given dataset.",
        objective: "Understand how to manipulate date/time data, set datetime indices, and visualize trends over time.",
        theory: "Time series analysis comprises methods for analyzing time series data in order to extract meaningful statistics and other characteristics of the data. Time series forecasting is the use of a model to predict future values based on previously observed values.",
        requirements: "Python 3.x, Pandas, NumPy, Matplotlib",
        dataset: "A CSV file containing daily temperature readings.",
        procedure: "1. Import required libraries.\n2. Load the dataset.\n3. Convert the date column to datetime objects.\n4. Set the date as the index.\n5. Analyze the time series.\n6. Visualize the data.",
        python_code: "import pandas as pd\nimport matplotlib.pyplot as plt\n\n# Load dataset\ndf = pd.read_csv('data.csv')\n\n# Convert date\ndf['Date'] = pd.to_datetime(df['Date'])\n\n# Set index\ndf.set_index('Date', inplace=True)\n\n# Plot\ndf.plot()\nplt.show()",
        output_image: "assets/exp1_output.png",
        result: "Successfully loaded, indexed, and visualized the time series data."
    },
    {
        id: 2,
        experiment_number: "EXPERIMENT 02",
        title: "Data Cleaning and Preprocessing",
        short_description: "Learn to handle missing values and encode categorical data.",
        tools: ["Python", "Pandas", "Scikit-Learn"],
        aim: "To clean and preprocess a raw dataset.",
        objective: "Learn to handle missing values, outliers, and categorical encoding.",
        theory: "Data cleaning is the process of fixing or removing incorrect, corrupted, incorrectly formatted, duplicate, or incomplete data within a dataset.",
        requirements: "Python 3.x, Pandas, Scikit-Learn",
        dataset: "Customer information dataset with missing values.",
        procedure: "1. Load data.\n2. Identify missing values.\n3. Impute or drop missing values.\n4. Encode categorical variables.",
        python_code: "import pandas as pd\nfrom sklearn.impute import SimpleImputer\n\ndf = pd.read_csv('data.csv')\n# Fill missing values\ndf.fillna(df.mean(), inplace=True)",
        output_image: "assets/exp2_output.png",
        result: "Dataset is clean and ready for modeling."
    }
];

function getExperiments() {
    const stored = localStorage.getItem('experiments_v3');
    if (stored) {
        return JSON.parse(stored);
    }
    localStorage.setItem('experiments_v3', JSON.stringify(initialExperiments));
    return initialExperiments;
}

function saveExperiment(exp) {
    const experiments = getExperiments();
    exp.id = experiments.length ? Math.max(...experiments.map(e => e.id)) + 1 : 1;
    experiments.push(exp);
    localStorage.setItem('experiments_v3', JSON.stringify(experiments));
    return exp;
}

function getExperimentById(id) {
    const experiments = getExperiments();
    return experiments.find(e => e.id === parseInt(id));
}
