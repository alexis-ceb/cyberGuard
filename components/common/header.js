import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link
} from '@nextui-org/react'

export default function Header() {
  return (
    <Navbar className='mt-3' classNames={{ base: 'bg-[#F1F2F3]' }}>
      <NavbarBrand>
        <p className='font-bold text-inherit'>ACME</p>
      </NavbarBrand>
      <NavbarContent
        className='hidden sm:flex gap-4 text-base text-white justify-center mx-3 px-8 rounded-full bg-[#132C44]'
        justify='end'
        classNames={{}}>
        <NavbarItem>
          <Link className='text-white ' href='#'>
            Analisis de trafico
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white' href='#' aria-current='page'>
            Deteccion
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white' href='#'>
            Reportes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white' href='#'>
            Configuracion
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
