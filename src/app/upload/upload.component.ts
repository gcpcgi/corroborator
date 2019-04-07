import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  fileToUpload: File = null;

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  processFileData() {
    this.router.navigate(['/result-details']);
    /* this.rest.uploadFile(this.fileToUpload).subscribe((result) => {
      this.router.navigate(['/result-details/']);
    }, (err) => {
      console.log(err);
    }); */
  }

}
