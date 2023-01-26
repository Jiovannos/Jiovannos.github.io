// An efficient way to keep code formatting when asked for the code block
const myText = `import numpy as np
import cv2
import csv
from datetime import datetime
import time
from pynput.mouse import Listener as MouseListener
from pynput.keyboard import Listener as KeyboardListener
import threading
import mss
import mss.tools
import os
from PyQt5 import QtCore, QtGui, QtWidgets
from PyQt5.QtCore import QTimer,QDateTime
from opencv_calibration import Ui_MainWindow
import sys


class Capture:
    def __init__(self,folder,analysis) :
        self.analysis=analysis
        self.folder=folder
        self.now = datetime.now()
        self.cap = cv2.VideoCapture(0)
        self.start=time.time()
        self.gx=0
        self.gy=0
        session_time=self.session()
        self.current_session=self.create_session(session_time)
        threading.Thread(target=self.start_calibration).start()
        self.csv_write()
        self.cam_to_image()
        self.screen_to_image()
        # self.frame=0
        keyboard_listener= KeyboardListener(on_press=self.on_press,on_release=self.on_release)
        mouse_listener= MouseListener(on_move=self.on_move,on_click=self.on_click,on_scroll=self.on_scroll)
        keyboard_listener.start()
        mouse_listener.start()
        keyboard_listener.join()
        mouse_listener.join()
        

    def pinakas(self,time,x,y,key_pressed=0,key_released=0,click=0,button=0,dy_scroll=0):
        pin=[time,x,y,key_pressed,key_released,click,button,dy_scroll]
        return pin

    def time_pressed(self):
        timePressed=str(datetime.now().strftime('%Y_%m_%d %H-%M-%S_%f'))
        return timePressed

    def session(self):
        session_time=str(datetime.now().strftime('%Y_%m_%d %H_%M_%S'))
        return session_time

    def create_session(self,session_time):
        session_link=self.folder+f"{session_time}\\"
        camera_link=self.folder+f"{session_time}\\camera\\"
        screen_link=self.folder+f"{session_time}\\screen\\"
        os.mkdir(session_link)
        os.mkdir(camera_link)
        os.mkdir(screen_link)
        return [session_link,camera_link,screen_link]
    
    def csv_write(self):
        csv_link=self.current_session[0]
        link_csv=csv_link+'log.csv'
        f = open(link_csv, 'w')
        self.writer = csv.writer(f)
        self.writer.writerow(['time','x','y','key_pressed','key_released','click','button','dy_scroll'])


    def on_press(self,key):
        try:
            self.writer.writerow(self.pinakas(self.time_pressed(),self.gx,self.gy,key_pressed=key.char))

        except AttributeError:
            self.writer.writerow(self.pinakas(self.time_pressed(),self.gx,self.gy,key_pressed=key))

        
    def on_release(self,key):
       self.writer.writerow(self.pinakas(self.time_pressed(),self.gx,self.gy,key_released=key))
        
    def on_move(self,x, y):
        self.gx,self.gy=x,y
        self.writer.writerow(self.pinakas(self.time_pressed(),self.gx,self.gy))

    def on_click(self,x, y, button, pressed):
        self.gx,self.gy=x,y
        if pressed:
            click=1
        else:
            click=2
        if str(button)=='Button.left':
            button=1
        if str(button)=='Button.middle':
            button=2
        if str(button)=='Button.right':
            button=3
        self.writer.writerow(self.pinakas(self.time_pressed(),self.gx,self.gy,click=click,button=button))

    def on_scroll(self,x, y, dx, dy):
        self.gx,self.gy=x,y
        self.writer.writerow(self.pinakas(self.time_pressed(),self.gx,self.gy,dy_scroll=dy))

    def start_calibration(self):
        app = QtWidgets.QApplication(sys.argv)
        MainWindow = QtWidgets.QMainWindow()
        ui = Ui_MainWindow()
        ui.setupUi(MainWindow,self.current_session)
        MainWindow.show()
        sys.exit(app.exec_())

    def cam_to_image(self):
        threading.Timer(0.2, self.cam_to_image).start()
        ret, frame = self.cap.read() 
        cropped_image = frame[210:390, 200:450]
        cam_link=self.current_session[1]
        link=cam_link+f"{self.time_pressed()}.jpeg"
        frame=cv2.cvtColor(cropped_image,cv2.COLOR_BGR2GRAY )
        cv2.imwrite(link, frame)

    def screen_to_image(self):
        threading.Timer(0.2, self.screen_to_image).start()
        screen_link=self.current_session[2]
        link=screen_link+f"{self.time_pressed()}.jpeg"
        
        with mss.mss() as mss_instance:  # Create a new mss.mss instance
            monitor = mss_instance.monitors[0]  # Identify the display to capture
            screenshot = mss_instance.grab(monitor)  # Take the screenshot
            img = np.array(screenshot)
            frame = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            cv2.imwrite(link, frame,[int(cv2.IMWRITE_JPEG_QUALITY), self.analysis])
    

folder="D:\\mouse_tracker\\"
capture=Capture(folder,analysis=30)
`;

export default myText;
