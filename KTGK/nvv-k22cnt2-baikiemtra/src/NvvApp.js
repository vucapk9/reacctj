
import React from 'react';
import './App.css';
import NvvSinhVienList from './components/NvvSinhVienList';

function NvvApp() {
  return (
    <div className="NvvApp">
      <header className="App-header">
        <h1> Quản lý Sinh viên</h1>
      </header>
      <main>
        <NvvSinhVienList />
      </main>
    </div>
  );
}

export default NvvApp;