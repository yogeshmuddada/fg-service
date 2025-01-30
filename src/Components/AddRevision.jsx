import React from 'react'

export default function AddRevision() {
    const domains = ['BEST', 'BEST-MDMS', 'APDCl', 'TORRENT', 'PSPL', 'NCC'];

    const handleInput =()=>{
        
    }
  return (
    <div>
      <form action="">
      <label className="mt-4 block text-sm text-gray-700 font-medium mb-1 text-left">Domain</label>
                    <select
                        name="domain"
                        onChange={handleInput}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {domains.map((domain) => (
                            <option key={domain} value={domain}>
                                {domain}
                            </option>
                        ))}
                    </select>
      </form>
    </div>
  )
}
