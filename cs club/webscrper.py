from selenium import webdriver

driverPath = " chromedriver.exe"

driver = webdriver.Chrome(driverPath)

driver.get("https://www.google.com")