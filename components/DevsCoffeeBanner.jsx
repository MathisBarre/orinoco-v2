import splitbee from '@splitbee/web'

export default function DevsCoffeeBanner () {
  return (
    <section style={{ backgroundColor: '#1F2937', color: 'white', fontSize: 14, padding: '8px 16px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', position: 'sticky', top: 0, zIndex: 999999, overflow: 'hidden' }}>
      <div className="container px-4 mx-auto" style={{ margin: 'auto', display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
        <img style={{ position: 'absolute', height: 38 }} src="https://devs.coffee/images/logo.svg" alt="devs.coffee logo" />
        <div style={{ marginLeft: '3.5rem' }}>
          Un projet{' '}
          <a
            href="https://devs.coffee"
            style={{ color: 'white', fontWeight: 'bolder', textDecoration: 'underline' }}
            onClick={async (e) => {
              e.preventDefault()
              await splitbee.track('Visit devs.coffee')
              location.href = 'https://devs.coffee'
            }}
          >devs.coffee</a>{' '}
          <span style={{ fontSize: '0.75rem', opacity: '.90' }}>
            par
            <a href="https://mathisbarre.com" style={{ color: 'inherit', fontWeight: 'bolder', textDecoration: 'none' }}>{' '}Mathis Barré</a>
          </span>
        </div>
        <nav className="hidden sm:block">
          <a target="_blank" className="hover:underline" href="https://reservia.mathisbarre.com" rel="noreferrer">Reservia</a>
          <span className="cursor-default">{' '}-{' '}</span>
          <a target="_blank" className="hover:underline" href="https://ohmyfood.mathisbarre.com" rel="noreferrer">OhMyFood</a>
          <span className="cursor-default">{' '}-{' '}</span>
          <a target="_blank" className="hover:underline" href="https://github.com/MathisBarre/MathisBarre_7_01082021_front-end" rel="noreferrer">Groupomania</a>
        </nav>
      </div>
    </section>
  )
}
