import React, { useState } from 'react';
import './App.css';

function Sidebar({ onSelectEnvironment }) {
  const environments = ['dev', 'stage', 'production'];

  return (
    <div className="Sidebar">
      {environments.map(env => (
        <button key={env} onClick={() => onSelectEnvironment(env)}>
          {env}
        </button>
      ))}
    </div>
  );
}

function App() {
  const [environment, setEnvironment] = useState('dev');
  const [microservices, setMicroservices] = useState([
    { serviceName: 'service-a', dockerImage: 'service-a:1.0.0', version: '1.0.0' },
    { serviceName: 'service-b', dockerImage: 'service-b:1.0.0', version: '1.0.0' },
    { serviceName: 'service-c', dockerImage: 'service-c:1.0.0', version: '1.0.0' },
  ]);

  return (
    <div className="App">
      <Sidebar onSelectEnvironment={setEnvironment} />
      <header className="App-header">
        <h1>Microservices Deployment Dashboard ({environment})</h1>
        <MicroserviceTable microservices={microservices} />
      </header>
    </div>
  );
}

function MicroserviceTable({ microservices }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Service Name</th>
          <th>Docker Image</th>
          <th>Version</th>
        </tr>
      </thead>
      <tbody>
        {microservices.map(({ serviceName, dockerImage, version }) => (
          <tr key={serviceName}>
            <td>{serviceName}</td>
            <td>{dockerImage}</td>
            <td>{version}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;