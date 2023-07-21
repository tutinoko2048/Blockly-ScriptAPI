import Blockly from 'blockly';
import { useState, useEffect } from 'react';

export default function App() {
  const xml = `<xml id='toolbox'>
    <category name="Loops" colour="%{BKY_LOOPS_HUE}">
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <block type="math_number">
                    <field name="NUM">10</field>
                </block>
            </value>
        </block>
        <block type="controls_whileUntil"></block>
    </category>
    <category name="Math" colour="%{BKY_MATH_HUE}">
        <block type="math_number">
            <field name="NUM">123</field>
        </block>
    </category>
    <category name="Text" colour="%{BKY_TEXTS_HUE}">
        <block type="text"></block>
        <block type="text_print"></block>
    </category>
    </xml>`
  const parser = new DOMParser();
  const dom = parser.parseFromString(xml, 'text/xml');
  
  useEffect(() => {
    Blockly.inject('workspace', {
      toolbox: dom.getElementById('toolbox') as Element
    });
  });
  
  return (
    <main>
      <div id="workspace" style={{ width: '300px', height: '300px' }}></div>
      
      hi
    </main>
  )
}