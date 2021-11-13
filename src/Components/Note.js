import React from 'react'
import {MdDeleteForever} from 'react-icons/md';
export const Note = () => {
    return (
        <div className="note">
            <span>hello this is my first note</span>
            <div className="note-footer">
                <small>13/11/21</small>
                <MdDeleteForever />
            </div>
        </div>
    )
}
