using System.Text.Json.Serialization;

namespace Optimum.Data.Entities
{
    /// <summary>
    /// Entity created to get the customer data.
    /// </summary>
    public class Optimumdata
    {
  
        [JsonPropertyName("id")]
        public string? Id { get; set; }

        [JsonPropertyName("salutation")]
        public string? Salutation { get; set; }

        [JsonPropertyName("initials")]
        public string? Initials { get; set; }

        [JsonPropertyName("firstname")]
        public string? Firstname { get; set; }

        [JsonPropertyName("firstname_ascii")]
        public string FirstnameAscii { get; set; }

        [JsonPropertyName("gender")]
        public string? Gender { get; set; }

        [JsonPropertyName("firstname_country_rank")]
        public string? FirstnameCountryRank { get; set; }

        [JsonPropertyName("firstname_country_frequency")]
        public string? FirstnameCountryFrequency { get; set; }

        [JsonPropertyName("lastname")]
        public string? Lastname { get; set; }

        [JsonPropertyName("lastname_ascii")]
        public string? LastnameAscii { get; set; }

        [JsonPropertyName("lastname_country_rank")]
        public string? LastnameCountryRank { get; set; }

        [JsonPropertyName("lastname_country_frequency")]
        public string? LastnameCountryFrequency { get; set; }

        [JsonPropertyName("email")]
        public string? Email { get; set; }

        [JsonPropertyName("password")]
        public string? Password { get; set; }

        [JsonPropertyName("country_code")]
        public string? CountryCode { get; set; }

        [JsonPropertyName("country_code_alpha")]
        public string? CountryCodeAlpha { get; set; }

        [JsonPropertyName("country_name")]
        public string? CountryName { get; set; }

        [JsonPropertyName("primary_language_code")]
        public string? PrimaryLanguageCode { get; set; }

        [JsonPropertyName("primary_language")]
        public string? PrimaryLanguage { get; set; }

        [JsonPropertyName("balance")]
        public double? Balance { get; set; }

        [JsonPropertyName("phone_Number")]
        public string? PhoneNumber { get; set; }

        [JsonPropertyName("currency")]
        public string? Currency { get; set; }

        [JsonPropertyName("partitionKey")]
        public string? PartitionKey { get; set; }

        [JsonPropertyName("rowKey")]
        public string? RowKey { get; set; }

        [JsonPropertyName("timestamp")]
        public DateTime? Timestamp { get; set; }

        [JsonPropertyName("eTag")]
        public ETag? ETag { get; set; }
    }
}