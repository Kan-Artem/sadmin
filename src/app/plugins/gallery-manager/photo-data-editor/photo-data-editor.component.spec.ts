import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDataEditorComponent } from './photo-data-editor.component';

describe('PhotoDataEditorComponent', () => {
  let component: PhotoDataEditorComponent;
  let fixture: ComponentFixture<PhotoDataEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoDataEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDataEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
