import React, { ReactElement } from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import { NextPageWithLayout } from '../../helpers/types'

const AdminHome: NextPageWithLayout = () => {
    return (
        <div>Admin page</div>
    )
}

// AdminHome.getLayout = function getLayout(page: ReactElement) {
//     return (
//         <DefaultLayout>
//             {page}
//         </DefaultLayout>
//     )
// }
AdminHome.isAuth = true;

export default AdminHome