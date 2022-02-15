import { Suspense } from 'react'
import Note from '../components/Note.server'
import NoteSkeleton from '../components/NoteSkeleton'
import Page from '../components/Page.server'
import { getUser } from '../libs/session'

export default function NotePage({ login, searchText = '', router }) {
  const { id } = router.query
  return (
    <Page login={login} searchText={searchText}>
      <Suspense fallback={<NoteSkeleton isEditing={false} />}>
        <Note login={login} selectedId={id} isEditing={false} />
      </Suspense>
    </Page>
  )
}

export async function getServerSideProps({ req }) {
  return {
    props: { login: getUser(req) },
  }
}
