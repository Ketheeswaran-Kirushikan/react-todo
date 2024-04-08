import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';
import Button from '../Button/Button';
import {PlusIcon,PencilIcon,TrashIcon} from '@heroicons/react/outline'; 
import { Link } from 'react-router-dom';

const Table = () => {
  
  return (
    <div className="container-fluid">
      <div className="table-responsive py-5 border-1">
        <div className='border-work'>
          <h1>Todo-List</h1>
          <Link to="/todo" className='Link-tag'>
              <Button icon={PlusIcon} className="icon-button" />
          </Link>
        </div>
        <table className="table table-bordered table-hover text-center">
          <thead>
            <tr className="head-color">
              <th scope="col">Todo-ID</th>
              <th scope="col">Title</th>
              <th scope="col">Created-by</th>
              <th scope="col">created-date</th>
              <th scope="col">updated-date</th>
              <th scope="col">Dead-line</th>
              <th scope="col">Description</th>
              <th scope="col">Progress</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sample Title 1</td>
              <td>User 1</td>
              <td>2024-04-01</td>
              <td>2024-04-15</td>
              <td>2024-04-15</td>
              <td>Description 1</td>
              <td>50%</td>
              <td><Link to="/todoedit" className='Link-tag'><Button className='edit-button' name='Edit' icon={PencilIcon}/></Link></td>
              <td><Button className='delete-button' name='Delete' icon={TrashIcon}/></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sample Title 2</td>
              <td>User 2</td>
              <td>2024-04-02</td>
              <td>2024-04-16</td>
              <td>2024-04-15</td>
              <td>Description 2</td>
              <td>25%</td>
              <td><Link to="/todoedit" className='Link-tag'><Button className='edit-button' name='Edit' icon={PencilIcon}/></Link></td>
              <td><Button className='delete-button' name='Delete' icon={TrashIcon}/></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sample Title 3</td>
              <td>User 3</td>
              <td>2024-04-03</td>
              <td>2024-04-17</td>
              <td>2024-04-15</td>
              <td>Description 3</td>
              <td>75%</td>
              <td><Link to="/todoedit" className='Link-tag'><Button className='edit-button' name='Edit' icon={PencilIcon}/></Link></td>
              <td><Button className='delete-button' name='Delete' icon={TrashIcon}/></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Sample Title 4</td>
              <td>User 4</td>
              <td>2024-04-04</td>
              <td>2024-04-18</td>
              <td>2024-04-15</td>
              <td>Description 4</td>
              <td>100%</td>
              <td><Link to="/todoedit" className='Link-tag'><Button className='edit-button' name='Edit' icon={PencilIcon}/></Link></td>
              <td><Button className='delete-button' name='Delete' icon={TrashIcon}/></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Sample Title 5</td>
              <td>User 5</td>
              <td>2024-04-05</td>
              <td>2024-04-19</td>
              <td>2024-04-15</td>
              <td>Description 5</td>
              <td>10%</td>
              <td><Link to="/todoedit" className='Link-tag'><Button className='edit-button' name='Edit' icon={PencilIcon}/></Link></td>
              <td><Button className='delete-button' name='Delete' icon={TrashIcon}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
