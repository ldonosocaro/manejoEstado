import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IError } from 'src/app/interface/error';
import { ErrorService } from 'src/app/services/common/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public errorData: IError;
  private errorType: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.initErrorData();
  }

  initErrorData(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.errorType = params['errorType'];
    });
    this.errorData = this.errorService.setErrorType(this.errorType);
  }

  back(): void {
    this.router.navigate([this.errorData.backUrl]);
  }

}
