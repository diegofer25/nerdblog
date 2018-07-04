import LoadingComponent from './Loading'
import AlertComponent from './Alert'
import DialogComponent from './Dialog'
import PreviewComponent from './Preview'

export const Loading = LoadingComponent

export const Alert = AlertComponent

export const Dialog = DialogComponent

export const Preview = PreviewComponent

export const PostRender = () => import('./PostRender')

export const PostForm = () => import('./PostForm')

export const CategoryCard = () => import('./CategoryCard')

export const AddCategory = () => import('./AddCategory')
