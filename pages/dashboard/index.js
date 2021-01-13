import LogoText from '../../components/logo-with-text'
import Nav from '../../components/nav'
import NavDash from '../../components/nav-dash'

export default function IndexPage() {
    return (
        <div className="bg-white">
            <Nav />
            <div className="flex">
                <NavDash />
                <div className="DashboardContent flex-grow py-20 m-6 min-h-screen h-screen">
                    <h1 className="text-5xl text-center text-purple">
                        Welcome to
                    </h1>
                    <div class="max-w-sm mx-auto my-2 text-center">
                        <LogoText />
                    </div>
                </div>
            </div>
        </div>
    )
}
