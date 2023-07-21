import Blockly from 'blockly';
import { useState, useEffect } from 'react';

export default function App() {
  useEffect(() => {
    Blockly.inject('workspace', {
      toolbox: document.getElementById('toolbox')
    });
  });
  
  return (
    <main>
      <div id="workspace" style={{ width: '300px', height: '300px' }}></div>
      <div id='toolbox' > </div>
      hi
    </main>
  )
}