import yfinance as yf
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import mplfinance as mpf
from statsmodels.tsa.stattools import adfuller, coint
from statsmodels.tsa.vector_ar.vecm import coint_johansen
from scipy import stats
import cvxpy as cp

# List of stock tickers
tickers = ['BWEN', 'STGW', 'PLTK', "TAYD", "^GSPC", "^NDX", "DJI"]

# Create an empty DataFrame to hold the stock data
stock_data = pd.DataFrame()

# Fetch and analyze stock data for each ticker
for ticker in tickers:
    # Download historical data
    stock = yf.Ticker(ticker)
    hist_data = stock.history(period="5y")
    
    # Calculate 14-day RSI
    delta = hist_data['Close'].diff(1)
    gain = (delta.where(delta > 0, 0)).rolling(window=14).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=14).mean()
    rs = gain / loss
    rsi = 100 - (100 / (1 + rs))
    
    # Add RSI to historical data
    hist_data['RSI'] = rsi
    
    # Append data to the main DataFrame
    hist_data['Ticker'] = ticker
    stock_data = pd.concat([stock_data, hist_data])