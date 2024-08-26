import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn={firstName:'Suraj',lastName:'Gaikwad',email:'suraj@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
         <HeaderBox
         type="greeting"
         title="Welcome"
         user={loggedIn?.firstName || 'Guest'}
         subtext="Access and manage your account and transaction efficiently."
         />

         <TotalBalanceBox
         accounts={[]}
         totalBanks={1}
         totalCurrentBalance={1250.35}
         />
        </header>
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:124.50},{currentBalance:122.50}]}
      />
    </section >
  )
}

export default Home