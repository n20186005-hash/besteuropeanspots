type InfoRowProps = {
  icon?: string
  label: string
  value: string
}

export function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      {icon && (
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{icon}</span>
          <div className="text-sm text-gray-500">{label}</div>
        </div>
      )}
      {!icon && <div className="text-sm text-gray-500 mb-1">{label}</div>}
      <div className="text-gray-900 font-medium">{value}</div>
    </div>
  )
}
