import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestComponent } from './edit-test.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Testhelper } from 'src/app/service/testHelper';
import { TestApi } from 'src/app/api/test-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('EditTestComponent', () => {
  let component: EditTestComponent;
  let fixture: ComponentFixture<EditTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTestComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule,HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
