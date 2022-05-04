/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdropcomponent',
  templateUrl: './dragdropcomponent.component.html',
  styleUrls: ['./dragdropcomponent.component.scss'],
})
export class DragdropcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.dragdrop();
  }

  dragdrop(){
    const items = document.querySelectorAll('.item');
    const columns = document.querySelectorAll('.column');
    let dragItem = null;

    items.forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });

    function dragStart(event) {
      dragItem = this;
      setTimeout(() => this.className = 'invisible', 0);
      event.dataTransfer.setData('text', event.target.id);
    }

    function dragEnd() {
      this.className = 'item';
      dragItem = null;
    }

  columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
  });

  function dragOver(event) {
    if(!event.target.classList.contains('dropped')) {
      event.preventDefault();
    }
  }
  function dragEnter(event) {
      if(!event.target.classList.contains('dropped')) {
        event.target.classList.add('droppable-hover');
      }
  }
  function dragLeave(event) {
    if(!event.target.classList.contains('dropped')) {
      event.target.classList.remove('droppable-hover');
    }
  }
  function dragDrop(event) {
    event.preventDefault();
    console.log(dragItem.getAttribute('value'));
      event.preventDefault();
      event.target.classList.remove('droppable-hover');
      const draggableElementData = dragItem.getAttribute('value');
      const droppableElementData = event.target.getAttribute('id');
      const isCorrectMatching = draggableElementData === droppableElementData;

      console.log('item:', draggableElementData);
      console.log('column:', droppableElementData);
      console.log('isCorrectMatching:', isCorrectMatching);

      if(isCorrectMatching) {
        dragItem.setAttribute('draggable', 'false');
        this.append(dragItem);
      }
      if(isCorrectMatching === false) {
        console.log('Try again');
      }
  }
}

}
