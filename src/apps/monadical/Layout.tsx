import { useEffect, useState, useCallback } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Navbar } from '@/components/ui/navbar'
import { PageLayout } from '@/components/ui/page-layout'
import { Footer } from '@/components/ui/footer'
import { ThemeToggle } from '@/components/ThemeToggle'
import { ScrollNavLink } from './components/ScrollNavLink'
import { navSections, footerLinkGroups } from './data/content'

const NAVBAR_HEIGHT = 65

export function MonadicalLayout() {
  const [activeSection, setActiveSection] = useState<string>('hero')

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

    if (visible.length > 0) {
      const id = visible[0].target.getAttribute('data-section')
      if (id) setActiveSection(id)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: `-${NAVBAR_HEIGHT}px 0px 0px 0px`,
      threshold: 0.3,
    })

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [handleIntersection])

  return (
    <PageLayout
      navbar={
        <Navbar
          variant="solid"
          logo={
            <NavLink
              to="/"
              className="font-serif text-lg font-semibold text-foreground hover:text-primary transition-colors"
            >
              Monadical
            </NavLink>
          }
          actions={<ThemeToggle />}
        >
          {navSections.map((section) => (
            <ScrollNavLink
              key={section.id}
              sectionId={section.id}
              active={activeSection === section.id}
            >
              {section.label}
            </ScrollNavLink>
          ))}
        </Navbar>
      }
      footer={
        <Footer
          variant="full"
          linkGroups={footerLinkGroups}
          copyright={<>&copy; {new Date().getFullYear()} Monadical Consulting. All rights reserved.</>}
          actions={
            <a
              href="mailto:hello@monadical.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </a>
          }
        />
      }
    >
      <Outlet />
    </PageLayout>
  )
}
