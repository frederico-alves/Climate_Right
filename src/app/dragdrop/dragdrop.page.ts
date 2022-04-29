import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.page.html',
  styleUrls: ['./dragdrop.page.scss'],
})
export class DragdropPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.dragdrop();
    this.dragdrop2();
  }

  reloadPage(){
    window.location.reload();
  }

  dragdrop2(){
    const items = document.querySelectorAll('.item');
    const columns = document.querySelectorAll('.column');
    let dragItem = null;

    items.forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });

    function dragStart() {
      console.log('drag started');
      dragItem = this;
      setTimeout(() => this.className = 'invisible', 0);
    }
    function dragEnd() {
      console.log('drag ended');
      this.className = 'item';
      dragItem = null;
    }

  columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
  });

  function dragOver(e) {
    e.preventDefault();
    console.log('drag over');
  }
  function dragEnter() {
      console.log('drag entered');
  }
  function dragLeave() {
      console.log('drag left');
  }
  function dragDrop() {
      console.log('drag dropped');
      this.append(dragItem);
  }
}

  dragdrop(){
    console.log('dragdrop1');
    const draggableElements = document.querySelectorAll('.draggable');
    const droppableElements = document.querySelectorAll('.droppable');

    draggableElements.forEach(elem => {
      elem.addEventListener('dragstart', dragStart);
    });

    droppableElements.forEach(elem => {
      elem.addEventListener('dragenter', dragEnter);
      elem.addEventListener('dragover', dragOver);
      elem.addEventListener('dragleave', dragLeave);
      elem.addEventListener('drop', drop);
    });

    // Drag and Drop Functions

    //Events fired on the drag target

    function dragStart(event) {
      event.dataTransfer.setData('text', event.target.id);
    }

    //Events fired on the drop target

    function dragEnter(event) {
      if(!event.target.classList.contains('dropped')) {
        event.target.classList.add('droppable-hover');
      }
    }

    function dragOver(event) {
      if(!event.target.classList.contains('dropped')) {
        event.preventDefault(); // Prevent default to allow drop
      }
    }

    function dragLeave(event) {
      if(!event.target.classList.contains('dropped')) {
        event.target.classList.remove('droppable-hover');
      }
    }

    function drop(event) {
      event.preventDefault();
      event.target.classList.remove('droppable-hover');
      const draggableElementData = event.dataTransfer.getData('text');
      const droppableElementData = event.target.getAttribute('data-draggable-id');
      const isCorrectMatching = draggableElementData === droppableElementData;
      if(isCorrectMatching) {
        const draggableElement = document.getElementById(draggableElementData);
        event.target.classList.add('dropped');

        event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
        draggableElement.classList.add('dragged');
        draggableElement.setAttribute('draggable', 'false');
        event.target.insertAdjacentHTML('afterbegin', `<i class="fas fa-${draggableElementData}"></i>`);
      }
    }
  }

}
