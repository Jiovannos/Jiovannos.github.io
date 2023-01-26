// An efficient way to keep code formatting when asked for the code block
const myText = `from copy import copy
from logging import exception
import shutil
from turtle import right
import sys
sys.path.append("E:\\GoogleDrive\\ΓΙΑΝΝΗΣ\\programming\\my_libraries")
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from pymongo import MongoClient
import json
from selenium.common.exceptions import NoSuchElementException
import PyPDF2
import files
from time import sleep
import time
import os
import glob
from datetime import date
import sys
import myexcel
import tabula
import pandas as pd
from pandas.io import sql
from sqlalchemy import create_engine
from datetime import datetime,timedelta
from pandasgui import show
import locale
locale.setlocale(locale.LC_NUMERIC,"de")
import fitz
import re
from pprint import pprint
import pdfplumber
import unicodedata


class Scrapper():
    def __init__(self,headless=False):
        self.link="E:\\GoogleDrive\\ΓΙΑΝΝΗΣ\\programming\\chrome_drivers\\chromedriver.exe"
        self.url="http://pwgopendata.eprocurement.gov.gr/actSearchErgwn/faces/active_search_main.jspx"
        self.download_folder='C:\\Users\\Jiova\\Downloads\\'
        self.pon_ergwn_folder='E:\\GoogleDrive\\ΓΙΑΝΝΗΣ\\programming\\pon_ergwn\\'
        self.folder_scrapper_link='E:\\SCRAPPER\\RESULTS\\'  
        self.get_driver(headless)
        self.date_time_now=format(datetime.now(),"%Y-%m-%d_%H-%M")
        self.log_folder="E:\\GoogleDrive\\ΓΙΑΝΝΗΣ\\programming\\icm_python\\logs\\"+str(datetime.now().year)+"\\"
        self.log=self.log_folder+self.date_time_now+".txt"
        self.create_log_folder()
        self.continue_scrapping=True
        self.server='local'

    def browsing(self):
      # Method Content...

    def get_driver(self,headless=True):
      # Method Content...
      
    def wait_until_id_is_found(self,id,timeout):
      # Method Content...

    def create_file_utf8(self,data):
      # Method Content...

    def create_log_folder(self):
      # Method Content...
      
    def check_if_folder_exists(self):
      # Method Content...

    def get_element_by_id(self,elem_id):
      # Method Content...

    def click_element_by_id(self,elem_id):
      # Method Content...

    def write_to_textbox(self,elem_id,text):
      # Method Content...

    def get_elements_list_by_tag(self,tag):
      # Method Content...

    def get_elements_by_class_name(self,class_name):
      # Method Content...

    def clear_element_by_id(self,elem_id):
      # Method Content...

    def read_file(self,link):
      # Method Content...

    def check_file(self,link):
      # Method Content...

    def read_dict_utf8(self,link):
      # Method Content...

    def get_mongo_db_collection(self,server,database,collection):
      # Method Content...

    def aggregation_pipelines(self,type,params=False):
      # Method Content...
        
    def aggregate_mongo(self,collection,pipeline_type,params=False):
      # Method Content...

    def log_mongo(self,what_to_log,where_to_log,where_to_log_date):
      # Method Content...

    def download_wait(self,directory, timeout, nfiles=None):
      # Method Content...
                                 
    def replace_substring_between(self,text:str,new_string:str,start_string:str,end_string:str,keep_start:bool=True,keep_end:bool=True):
      # Method Content...
    
    def move_downloaded_file(self,project,filename_web):
      # Method Content...
    
    def create_pon_ergwn_json(self):
      # Method Content...
       
    def transform_pon_ergwn_json(self,d_pon_ergwn):
      # Method Content...
        
    def update_pon_ergwn_mongo_db(self,collection,d_pon_ergwn):
      # Method Content...
       
    def get_downloaded_files_json(self):
      # Method Content...

    def update_mongo_db_field(self,server,database,collection,field):
      # Method Content...
       
    def get_ponergwn_ola(self):
      # Method Content...
        
    def move_file(self,filename, parent_directory,child_directory):
      # Method Content...
      
    def get_projects_by_status(self,status,server,only_new_projects=True,
    check_for_missing=True, ignore=[],check_for_participants=False):
        collection=self.get_mongo_db_collection(server,'projects','all')
      # Method Content...
        
    def get_project_information_and_files(self,status,server,database,collection,
    info=False,files=False,only_new_projects=False,check_for_missing=False,ignore_list=[],
    check_for_participants=False):
      # Method Content...
        
    def classify_mongo_project_files(self,only_new=False):
      # Method Content...
                            
    def update_pe_oikonomiki_prosfora(self,server):
      # Method Content...
        
    def info_diakyriksi(self,server):
      # Method Content...
 
    def update_pon_ergwn_database(self):
      # Method Content...

`;

export default myText;
