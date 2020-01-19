import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import * as Quill from 'quill';


@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @ViewChild('editor', { static: false }) editorRef: ElementRef;
  @Output('htmlContent') htmlContent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const editor = new Quill(this.editorRef.nativeElement, {
      theme: 'snow',
      modules: {
        toolbar: [
          [
            { 'header': [ 1, 2, 3, 4, 5, 6 ] },
            { 'size': [ 'small', false, 'large', 'huge' ] }
          ],
          ['bold', 'italic', 'underline', 'strike', { 'align': [] }],
          ['link', 'image', 'blockquote'],
          [{ 'script': 'sub' }, { 'script': 'super'}],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'color': [] }, { 'background': [] }, 'clean'],
        ],
      }
    });

    const { root } = editor;

    editor.on('text-change', () =>
      this.htmlContent.emit(root.innerHTML));
  }
}
