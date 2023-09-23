import React from 'react'

const ViewUsersTest = ({users}) => {
  return (
    <>
    {users.map((users) => {
        return (
            <div key={users.user_id}>
                <p>{users.username}</p>
                <p>{users.password}</p>
            </div>
        )
    })}
    </>
  )
}

export default ViewUsersTest