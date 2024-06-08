import supabase from "./supabase"
import { supabaseUrl } from "./supabase"
// Sign up Function
export async function signUp({ fullName,email, password }) {
    let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                fullName,
                avatar: "",
            },
        },
    })

    if (error) throw new Error(error.message);

    return data
}

// Login Funtction
export async function login({ email, password }) {
    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })

    if (error) throw new Error(error.message);

    console.log(data)
    return data
}

// Logout Funtction
export async function logout() {
    let { error } = await supabase.auth.signOut()


    if (error) throw new Error(error.message);

}

// getCurrentUser Funtction
export async function getCurrentUser() {
    // Check if The user Logged in
    const {data:session } = await supabase.auth.getSession();


    if (!session.session) return null

    // Get User Info
    const { data} = await supabase.auth.getUser()

    return data?.user
}

// updateCurrentUser Funtction
export async function updateCurrentUser({ password, fullName, avater }) {
    // 1].Update the password or fullname
    let updatedData
    if (password) updatedData ={password}
    if (fullName) updatedData = { data : {fullName} }
    
    // UPDATE USER
    const { data, error } = await supabase.auth.updateUser(updatedData)
    if (error) throw new Error(error.message);
    if (!avater)
        return data

    // 2].Update the avater image

    // upload image

    const fileName = `avater-${data.user.id}-${Math.random()}`;
    const { error: storageError } = await supabase.storage
        .from("avaters")
        .upload(fileName, avater);
    
    // check for error
    if (storageError) throw new Error(storageError.message);

    

    // 3. Update avatar in the user
    const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
        data: {
            avatar: `${supabaseUrl}/storage/v1/object/public/avaters/${fileName}`,
        },
    });

    if (error2) throw new Error(error2.message)
    return updatedUser;
}