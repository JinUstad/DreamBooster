interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  )
}
