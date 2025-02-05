import React, { useState } from 'react';
import './Tabs.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Descrição');

  return (
    <div>
      <div className="tabs-container">
        <div
          className={`tab-item ${activeTab === 'Descrição' ? 'active' : ''}`}
          onClick={() => setActiveTab('Descrição')}
        >
          Descrição
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'Descrição' && (
          <p className="description-text">
            Esse curso tem como objetivo de te dar os fundamentos da programação
            e entender um pouco mais sobre o web, precisamos desse conhecimento
            para então nos tornarmos aptos a estudar as diversas linguagens e
            tecnologias que vamos encontrar como desenvolvedores e
            desenvolvedoras web. Muito bem vamos diretos entender os
            fundamentos.
          </p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
