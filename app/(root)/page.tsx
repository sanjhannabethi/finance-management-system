import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Sanjhanna', lastName: 'Bethi', email: 'sanjhannabethi@finora.com' }
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently."
                />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={12400.65}
                />
            </header>

            RECENT TRANSACTIONS 
        </div>

        <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 1234.50 }, { currentBalance: 5000 }]}
        />

    </section>
  )
}

export default Home