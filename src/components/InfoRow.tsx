type InfoRowProps = {
  label: string
  value: string
}

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="text-sm text-gray-500 mb-1">{label}</div>
      <div className="text-gray-900 font-medium">{value}</div>
    </div>
  )
}
