export const addMember = (member) => {
    return {
        type: 'ADD_MEMBER',
        payload: {
            name: member.name,
            lastName: member.lastName,
            address: member.address,
            rol: member.rol
        }
    }
}

export const deleteMember = (name) => {
    return {
        type: 'DELETE_MEMBER',
        payload: name

    }
}
 
