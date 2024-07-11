import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NvvSinhVienAddOrEdit = ({ studentId, onClose }) => {
  const [student, setStudent] = useState({
    HoSV: '',
    TenSV: '',
    NgaySinh: '',
    Phai: '',
    Noisinh:'',
    Diemtrungbinh:'',
    Hocbong:'',

  });

  useEffect(() => {
    if (studentId) {
      fetchStudent(studentId); 
    }
  }, [studentId]);

  const fetchStudent = async (id) => {
    try {
      const response = await axios.get(`https://668b906c0b61b8d23b0a1bbf.mockapi.io/nvvapi/V1//nvvSinhVien/${id}`); 
      setStudent(response.data); 
    } catch (error) {
      console.error('Error fetching student:', error);
    }
  };

  const NvvhandleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const NvvhandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (studentId) {
        await axios.put(`https://668b906c0b61b8d23b0a1bbf.mockapi.io/nvvapi/V1//nvvSinhVien/${studentId}`, student); // Replace with your MockApi URL
      } else {
        await axios.post('https://668b906c0b61b8d23b0a1bbf.mockapi.io/nvvapi/V1//nvvSinhVien', student); // Replace with your MockApi URL
      }
      onClose(); 
    } catch (error) {
      console.error('Error submitting student data:', error);
    }
  };

  return (
    <div>
      <h2>{studentId ? 'Chỉnh sửa thông tin sinh viên' : 'Thêm mới sinh viên'}</h2>
      <form onSubmit={NvvhandleSubmit}>
        <div>
          <label>Họ sinh viên:</label>
          <input
            type="text"
            name="HoSV"
            value={student.HoSV}
            onChange={NvvhandleChange}
            required
          />
        </div>
        <div>
          <label>Tên sinh viên:</label>
          <input
            type="text"
            name="TenSV"
            value={student.hoTen}
            onChange={NvvhandleChange}
            required
          />
        </div>
        <div>
          <label>Ngày sinh:</label>
          <input
            type="date"
            name="ngaySinh"
            value={student.NgaySinh}
            onChange={NvvhandleChange}
            required
          />
        </div>
        <div>
          <label>Phai:</label>
          <select
            name="phai"
            value={student.Phai}
            onChange={NvvhandleChange}
            required
          >
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div>
          <label>Noi Sinh:</label>
          <input
            type="date"
            name="Noi sinh"
            value={student.Noisinh}
            onChange={NvvhandleChange}
            required
          />
          <div>
          <label>Diêm trung bình:</label>
          <input
            type="date"
            name="diêmtrunbgbinh"
            value={student.Diemtrungbinh}
            onChange={NvvhandleChange}
            required
          />
        </div>
        <div>
          <label>Học Bổng:</label>
          <input
            type="date"
            name="học bổng"
            value={student.Hocbong}
            onChange={NvvhandleChange}
            required
          />
        </div>
        </div>
        <button type="submit">
          {studentId ? 'Lưu thay đổi' : 'Thêm mới'}
        </button>
        <button type="button" onClick={onClose}>
          Hủy bỏ
        </button>
      </form>
    </div>
  );
};

export default NvvSinhVienAddOrEdit;