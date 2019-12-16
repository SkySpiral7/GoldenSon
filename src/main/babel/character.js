'use strict';

function updateCharacterNameCharacterForward()
{
   character.updateCharacterName();
}

function updateLevelCharForward()
{
   character.updateLevel();
}

function saveToFileCharForward()
{
   character.saveToFile();
}

function saveToTextAreaCharForward()
{
   character.saveToTextArea();
}

function loadFileCharForward()
{
   character.loadFile();
}

function loadFromTextAreaCharForward()
{
   character.loadFromTextArea();
}

class CharacterComponent extends React.Component
{
   constructor(props)
   {
      super(props);
      character = this;
      this.state = {hp: 0};
      this.updateBaseStatCharForward = this.updateBaseStatCharForward.bind(this);
   }

   updateBaseStatCharForward(event)
   {
      character.updateBaseStat(event);
      var newVal = event.target.value;
      this.setState((state, props) =>
      {
         return {hp: newVal}
      });
   }

   render()
   {
      return (
         <div>
            <h2>General</h2>
            <label>Name: <input type="text" id="name" value=""
                                onChange={updateCharacterNameCharacterForward} /></label><br />
            <label>Adept (Elemental Alignment):
               <ElementOptions names={database.elements.names} onChange={updateAdeptEventForward} /></label>
            <br />
            <label>Combat type:
               <BackgroundOrCombatTypeOptions names={database.combatTypes.names} id="combatTypeSelect"
                                              onChange={updateCombatTypeEventForward} /></label>
            <br />
            <label>Background:
               <BackgroundOrCombatTypeOptions names={database.backgrounds.names} id="backgroundSelect"
                                              onChange={updateBackgroundEventForward} /></label>
            <br />
            <label>Level: <input type="number" id="level" value="1" min="1"
                                 onChange={updateLevelCharForward} /></label><br />
            <h2>Base stats</h2>
            <label>HP: <input type="number" id="hp" onChange={this.updateBaseStatCharForward}
                              value={this.state.hp}
                              min="0" /></label><br />
            <label>PP: <input type="number" id="pp" onChange={this.updateBaseStatCharForward} value="0"
                              min="0" /></label><br />
            <label>Attack: <input type="number" id="attack" onChange={this.updateBaseStatCharForward}
                                  value="0" min="0" /></label><br />
            <label>Defense: <input type="number" id="defense" onChange={this.updateBaseStatCharForward}
                                   value="0" min="0" /></label><br />
            <label>Agility: <input type="number" id="agility" onChange={this.updateBaseStatCharForward}
                                   value="0" min="0" /></label><br />
            <label>Luck: <input type="number" id="luck" onChange={this.updateBaseStatCharForward} value="0"
                                min="0" /></label><br />
            <h2>Djinn</h2>
            <div id="djinn"></div>
            <h2>Equipment</h2>
            <div id="equipment"></div>
            <h2>Final stats</h2>
            Class: <span id="class"></span><br />
            HP: <span id="hp-final"></span><br />
            PP: <span id="pp-final"></span><br />
            Attack: <span id="attack-final"></span><br />
            Defense: <span id="defense-final"></span><br />
            Agility: <span id="agility-final"></span><br />
            Luck: <span id="luck-final"></span><br />
            <h2>Psynergy</h2>
            <div id="psynergy"></div>
            <br /><br />
            <span onClick={saveToFileCharForward}><a
               href="javascript:alert('This link changes to data as you click it');"
               download=""
               id="save-to-file-link">Save to File</a></span>
            <input type="button" value="Save To Text Area" onClick={saveToTextAreaCharForward}
                   id="save-text-button" />
            <br />
            <input type="file" id="file-chooser" accept=".js,.json" /><br />
            <input type="button" value="Load from File" onClick={loadFileCharForward} />
            <input type="button" value="Load from Text Area" onClick={loadFromTextAreaCharForward}
                   id="load-text-button" /><br />
            <br />
            <textarea id="code-box" rows="10" cols="50"></textarea>
         </div>
      );
   }
}

ReactDOM.render(
   <CharacterComponent />,
   document.getElementById('characterDiv')
);
