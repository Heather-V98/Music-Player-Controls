// Node Class
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  // Doubly Linked List Class 
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.current = null;
    }
  
    // Add node to end of list
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = this.tail = newNode;
        newNode.next = newNode.prev = newNode; // circular link
      } else {
        newNode.prev = this.tail;
        newNode.next = this.head;
        this.tail.next = newNode;
        this.head.prev = newNode;
        this.tail = newNode;
      }
    }
  
    // Move to next node
    moveNext() {
      if (this.current) this.current = this.current.next;
      return this.getCurrent();
    }
  
    // Move to previous node
    movePrev() {
      if (this.current) this.current = this.current.prev;
      return this.getCurrent();
    }
  
    // Return current song
    getCurrent() {
      return this.current ? this.current.value : null;
    }
  
    // Set the current node to the first (head)
    setCurrentToHead() {
      this.current = this.head;
    }
  }
  
  // Set up playlist, got random songs from internet, all bangers
  const playlist = new DoublyLinkedList();
  const songs = [
    "Don't Stop Believin' – Journey",
    "Bohemian Rhapsody – Queen",
    "Hotel California – Eagles",
    "Imagine – John Lennon",
    "Billie Jean – Michael Jackson"
  ];
  
  songs.forEach(song => playlist.append(song));
  playlist.setCurrentToHead();
  
  // UI 
  const songTitle = document.getElementById('song-title');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const playBtn = document.getElementById('play-btn');
  
  let isPlaying = false;
  
  // Update Display 
  function updateDisplay() {
    const state = isPlaying ? 'Playing' : 'Paused';
    songTitle.textContent = `${state}: ${playlist.getCurrent()}`;
    playBtn.textContent = isPlaying ? '⏸ Pause' : '▶ Play';
  }
  
  // Buttons
  prevBtn.addEventListener('click', () => {
    playlist.movePrev();
    updateDisplay();
  });
  
  nextBtn.addEventListener('click', () => {
    playlist.moveNext();
    updateDisplay();
  });
  
  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    updateDisplay();
  });
  
  // Initialize load
  window.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
  });
  