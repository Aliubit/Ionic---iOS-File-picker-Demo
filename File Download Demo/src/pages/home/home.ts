import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { PhotoLibrary } from '@ionic-native/photo-library';

import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fileTransfer: FileTransferObject;

  constructor(
    public navCtrl: NavController,
    private transfer: FileTransfer,
    private file: File,
    private photoLibrary: PhotoLibrary,
    private androidPermissions: AndroidPermissions) {

    

  }

  download() {

    this.fileTransfer = this.transfer.create();

    alert("ponka");

    console.log("-------->");

    const url = 'https://www.w3schools.com/html/mov_bbb.mp4';

    /* this.photoLibrary.requestAuthorization().then(() => {

      alert("2");

      //this.photoLibrary.saveVideo(entry.toURL(), "Geo/Videos/").then((res)=>{
      this.photoLibrary.saveVideo('https://via.placeholder.com/350x150', "Geo/Videos/").then((res) => {

        console.log("Video Saved Successfully: " + res);

      }, (err) => {

        console.log("Video Saved Successfully" + err);

      });

    }).catch(err => console.log('permissions weren\'t granted')); */


    console.log("kkkkkkkkkkk");
    console.log(this.file.documentsDirectory);

    this.fileTransfer.download(url, this.file.documentsDirectory + 'mov_bbb.mp4').then((entry) => {
      console.log('download complete: ' + entry.toURL());
      console.log(entry);
      console.log(entry.toURL());

      alert("");


    }, (error) => {
      // handle error
      console.log('download error: ' + error);
    });

    /* this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => {

        console.log('Has permission?', result.hasPermission);

        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)

        const url = 'https://www.w3schools.com/html/mov_bbb.mp4';


        this.fileTransfer.download(url, this.file.dataDirectory + 'mov_bbb.mp4').then((entry) => {
          console.log('download complete: ' + entry.toURL());
          console.log(entry);
          console.log(entry.toURL());

          this.photoLibrary.requestAuthorization().then(() => {

            //this.photoLibrary.saveVideo(entry.toURL(), "Geo/Videos/").then((res)=>{
            this.photoLibrary.saveVideo('https://www.w3schools.com/html/mov_bbb.mp4', "Geo/Videos/").then((res) => {

              console.log("Video Saved Successfully: " + res);

            }, (err) => {

              console.log("Video Saved Successfully" + err);

            });

          }).catch(err => console.log('permissions weren\'t granted'));


        }, (error) => {
          // handle error
          console.log('download error: ' + error);
        });
      },
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    ); */




  }



}
