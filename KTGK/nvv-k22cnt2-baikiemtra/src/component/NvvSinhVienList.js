import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NvvSinhVienList from './components/NvvSinhVienList'; 

const NvvSinhVienList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents(); 
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://668b906c0b61b8d23b0a1bbf.mockapi.io/nvvapi/V1//nvvSinhVien');
      setStudents(response.data); 
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const NvvhandleEdit = (studentId) => {
   
    console.log('Edit student with ID:', studentId);
  };

  const NvvhandleDelete = (studentId) => {
    
    console.log('Delete student with ID:', studentId);
  };

  const NvvhandleAddNew = () => {
    
    console.log('Add new student');
  };

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <button onClick={NvvhandleAddNew}>Thêm mới</button>
      <table>
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Chức năng</th>
            <th>Học bổng</th>
            <th>Điểm trung bình</th>
            <th>Nơi sinh</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.maSV}</td>
              <td>{student.hoTen}</td>
              <td>{student.ngaySinh}</td>
              <td>{student.gioiTinh}</td>
              <td>{student.hocbong}</td>
              <td>{student.diemtrungbinh}</td>
              <td>{student.noisinh}</td>
              <td>
                <button onClick={() => NvvhandleEdit(student.id)}>Sửa</button>
                <button onClick={() => NvvhandleDelete(student.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NvvSinhVienList;