import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-popup-user',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponentUser implements OnInit {

  public refugee_id: any;
  public accommodation_id: any
  authUser: any;
  user: any;
  hasAccommodation = false;
;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public auth: AuthService, private http: HttpClient,
    public dialogRef: MatDialogRef<PopupComponentUser>, private router: Router) { }

  ngOnInit(): void {
    // console.log(this.data);
    this.http.get<any>('http://127.0.0.1:5000/users/' + this.data.user.auth_id.replace('|', '')).subscribe(data => {
      this.user = data;
      // console.log(this.user);
      this.hasAccommodation = this.user.type == 'refugee' && this.user.accommodation
      if (this.hasAccommodation && this.user.accommodation.photo == '') {
        this.user.accommodation.photo = 'data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=';
      }
    });
  }


  deleteUser(): void {
    // this.http.post<any>('http://127.0.0.1:5000/accommodations/' + this.data.accommodation.id + '/delete', {}).subscribe();
    // window.location.reload();
    // this.dialogRef.close();
  }

}
